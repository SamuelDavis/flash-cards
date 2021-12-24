export type UploadEvent = Event & { target: HTMLInputElement };
export type ReaderEvent = ProgressEvent & { target: FileReader };

type Heading = string;
type Description = string;
type Part = string;
type Answer = Part[];
type Item = {
  description: Description;
  answers: Answer[];
};

export type Card = {
  heading: Heading;
  items: Item[];
};

export type FlashCardData = Card[];

export function isTruthyString(value: any): value is string {
  return typeof value === "string" && !!value;
}

export function isPopulatedArray<T = any>(value: any): value is T[] {
  return Array.isArray(value) && value.length > 0;
}
