import type { FlashCardData } from "./types";
import { isPopulatedArray, isTruthyString } from "./types";

class FlashCardDataError extends Error {
  static NoCards() {
    return new FlashCardDataError(
      "Flash cards file does not contain an array of cards."
    );
  }

  static CardMissingHeading(cardIndex: number) {
    return new FlashCardDataError(
      `Card ${cardIndex} does not contain a (string) "heading".`
    );
  }

  static CardMissingItems(cardIndex: number) {
    return new FlashCardDataError(
      `Card ${cardIndex} does not contain an array of "items".`
    );
  }

  static ItemMissingDescription(cardIndex: number, j: number) {
    return new FlashCardDataError(
      `Card ${cardIndex}, item ${j} first element is not a (string) description.`
    );
  }

  static ItemsMissingAnswers(cardIndex: number, itemIndex: number) {
    return new FlashCardDataError(
      `Card ${cardIndex}, item ${itemIndex} does not contain any answers.`
    );
  }

  static AnswerMissing(
    cardIndex: number,
    itemIndex: number,
    answerIndex: number
  ) {
    return new FlashCardDataError(
      `Card ${cardIndex}, item ${itemIndex}, answer ${answerIndex} does not contain an array of (string) parts.`
    );
  }

  static PartMissing(
    cardIndex: number,
    itemIndex: number,
    answerIndex: number,
    partIndex: number
  ) {
    return new FlashCardDataError(
      `Card ${cardIndex}, item ${itemIndex}, answer ${answerIndex}, part ${partIndex} is not a valid (string) part.`
    );
  }
}

export function validateFlashCardsFileContent(cards: FlashCardData): void {
  if (!Array.isArray(cards)) throw FlashCardDataError.NoCards();
  cards.forEach((card, i) => {
    if (typeof card.heading !== "string")
      throw FlashCardDataError.CardMissingHeading(i);
    if (!Array.isArray(card.items))
      throw FlashCardDataError.CardMissingItems(i);
    card.items.forEach((item, j) => {
      if (!isTruthyString(item.description))
        throw FlashCardDataError.ItemMissingDescription(i, j);
      if (!isPopulatedArray(item.answers))
        throw FlashCardDataError.ItemsMissingAnswers(i, j);
      item.answers.forEach((answer, k) => {
        if (!isPopulatedArray(answer)) {
          console.error(answer);
          throw FlashCardDataError.AnswerMissing(i, j, k);
        }
        answer.forEach((part, l) => {
          if (!isTruthyString(part))
            throw FlashCardDataError.PartMissing(i, j, k, l);
        });
      });
    });
  });
}
