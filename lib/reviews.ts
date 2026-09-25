// Genuine WhatsApp feedback from US families, published with their permission.
//
// Rules for adding a review:
// - `text` is the family's own wording. Allowed edits only: trimming a greeting
//   or an off-topic sentence (mark a cut with "…"), and a word we add in
//   [square brackets]. Never rewrite, merge or "improve" a message.
// - Keep the matching screenshot in /public/images/reviews.
// - `courses` is internal only: it decides which pages show the review. It is
//   deliberately not displayed, so readers don't take a review as being about
//   one course only.
// - No Review/AggregateRating structured data: Google does not show stars for
//   reviews a business publishes about itself.

export type ReviewCourse =
  | "quran-for-kids"
  | "noorani-qaida"
  | "quran-for-adults"
  | "tajweed"
  | "hifz"
  | "arabic-language"
  | "islamic-studies"
  | "quran-for-reverts";

export interface FamilyReview {
  id: string;
  reviewer: "Parent" | "Adult student";
  country: string;
  context: string; // when the message was sent, shown to readers
  text: string;
  screenshot: string;
  screenshotAlt: string;
  courses: ReviewCourse[];
}

export const familyReviews: FamilyReview[] = [
  {
    id: "r002",
    reviewer: "Parent",
    country: "USA",
    context: "after a free trial class",
    text: "Alhamdulillah, thank you for the free trial class. We had a very good experience. Zenab loved the class! She really enjoyed it, and the teacher was kind, patient, and made her feel comfortable. We are very happy with the experience, Alhamdulillah.",
    screenshot: "/images/reviews/whatsapp-review-parent-r002.webp",
    screenshotAlt: "WhatsApp screenshot of the parent's message quoted above, sent after their daughter's free trial Quran class",
    courses: ["quran-for-kids"],
  },
  {
    id: "r001",
    reviewer: "Parent",
    country: "USA",
    context: "after a free trial class",
    text: "Thank you so much for the class. It went very well, and Emirhan liked his teacher. We especially appreciated that he read Islamic stories and helped Emirhan learn about Allah that was exactly what we were looking for…",
    screenshot: "/images/reviews/whatsapp-review-parent-r001.webp",
    screenshotAlt: "WhatsApp screenshot of the parent's message quoted above, sent after their son's free trial Quran class",
    courses: ["quran-for-kids", "islamic-studies"],
  },
  {
    id: "r005",
    reviewer: "Parent",
    country: "USA",
    context: "after a free trial class",
    text: "She was amazing she knew exactly what he needed. We are deciding between her and another. If you would please just give me to end of day I will update. Overall she was so pleasant and knowledgeable.",
    screenshot: "/images/reviews/whatsapp-review-parent-r005.webp",
    screenshotAlt: "WhatsApp screenshot of the parent's message quoted above about their son's trial class teacher",
    courses: ["quran-for-kids"],
  },
  {
    id: "r003",
    reviewer: "Parent",
    country: "USA",
    context: "after several lessons",
    text: "Thank you for the lessons! You're really a great teacher for kids!",
    screenshot: "/images/reviews/whatsapp-review-parent-r003.webp",
    screenshotAlt: "WhatsApp screenshot of the parent's message quoted above, below a Noorani Qaida lesson page shared by the teacher",
    courses: ["noorani-qaida", "quran-for-kids"],
  },
  {
    id: "r004",
    reviewer: "Adult student",
    country: "USA",
    context: "after a free trial class",
    text: "The class was very [eye-]opening. It was very simple and easy to understand.",
    screenshot: "/images/reviews/whatsapp-review-student-r004.webp",
    screenshotAlt: "WhatsApp screenshot of the adult student's message quoted above, sent after their free trial Quran class",
    courses: ["quran-for-adults"],
  },
];

export function reviewsById(ids: string[]): FamilyReview[] {
  return ids
    .map((id) => familyReviews.find((r) => r.id === id))
    .filter((r): r is FamilyReview => Boolean(r));
}

// Reviews for a course page: that course's reviews first, topped up with
// others so the section is never empty.
export function reviewsForCourse(course: ReviewCourse, count = 3): FamilyReview[] {
  const matching = familyReviews.filter((r) => r.courses.includes(course));
  const rest = familyReviews.filter((r) => !r.courses.includes(course));
  return [...matching, ...rest].slice(0, count);
}

// Stable (not random) pick for location pages, so different cities show
// different reviews and the page never changes between builds.
export function reviewsForSeed(seed: string, count = 2): FamilyReview[] {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const start = h % familyReviews.length;
  return Array.from({ length: Math.min(count, familyReviews.length) }, (_, i) =>
    familyReviews[(start + i) % familyReviews.length],
  );
}
