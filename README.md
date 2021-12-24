# Flash Cards

A small, interactive app for displaying flash cards.

### How to Use

Click the `Choose File` input labeled `Cards JSON File` and select a `.json` file describing the flash card data.

Optionally download example `.json` files by clicking on the `Decks` button, then one of the linked `.json` files.

### Format

```typescript
type FlashCardData = {
  heading: string;
  items: {
    description: string;
    answers: string[][];
  }[];
}[];
```

##### eg.

```json
[
  {
    "heading": "food",
    "items": [
      {
        "description": "breakfast",
        "answers": [
          ["eggs"],
          ["toast"],
          ["bacon"]
        ]
      },
      {
        "description": "dinner",
        "answers": [
          ["salmon"],
          ["chicken"],
          ["pasta"]
        ]
      }
    ]
  },
  {
    "heading": "sports",
    "items": [
      {
        "description": "american",
        "items": [
          ["soccer"],
          ["football"]
        ]
      },
      {
        "description": "british",
        "items": [
          ["football"],
          ["rugby"]
        ]
      }
    ]
  }
]
```
