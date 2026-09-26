// Single source of truth for the teacher roster.
// Data supplied by the academy (Website Strategy/templates/teachers data.txt,
// confirmed real and consented for publication, 26 Sept 2026). Nothing here is
// invented: every qualification, course and age range is exactly as given.
//
// Photos: 6 named male teachers have their own real photo. The 5 female
// teachers share one generic, faceless illustration (not a claimed photo of
// any individual) by the academy's choice, since it is clearly not a real
// photo and several sisters prefer not to show their face.

export type CourseSlug =
  | "quran-for-kids"
  | "tajweed"
  | "hifz"
  | "noorani-qaida"
  | "arabic-language"
  | "islamic-studies"
  | "quran-for-adults"
  | "quran-for-reverts";

export interface Teacher {
  slug: string;
  honorific: "Ustadh" | "Ustadha";
  name: string; // without honorific
  gender: "male" | "female";
  photo: string;
  experience: string; // as given, e.g. "7+ Years"
  headline: string;
  specialisation: string;
  qualifications: string[];
  courses: CourseSlug[];
  suitableFor: string[];
  languages: string[];
  studentAge: string;
  teachingStyle: string;
  bio: string;
}

export const teachers: Teacher[] = [
  {
    slug: "almas-fatima",
    honorific: "Ustadha",
    name: "Almas Fatima",
    gender: "female",
    photo: "/images/teachers/female-teacher-placeholder.webp",
    experience: "Teaching since 2022",
    headline: "Female Quran Teacher for Sisters and Children",
    specialisation: "Quran for Kids, Tajweed, Noorani Qaida, Islamic Studies",
    qualifications: ["Qaria e Quran", "Bachelor in Islamic Studies"],
    courses: ["quran-for-kids", "tajweed", "noorani-qaida", "islamic-studies"],
    suitableFor: ["Kids", "Sisters", "Beginners"],
    languages: ["English", "Urdu"],
    studentAge: "4+ Years",
    teachingStyle:
      "Patient and encouraging, known for connecting easily with young children and beginner sisters.",
    bio: "Almas is a certified female Quran teacher, a Qaria e Quran with a Bachelor in Islamic Studies, teaching sisters and children since 2022.",
  },
  {
    slug: "ustadha-ayesha-rahman",
    honorific: "Ustadha",
    name: "Ayesha Rahman",
    gender: "female",
    photo: "/images/teachers/female-teacher-placeholder.webp",
    experience: "7+ Years",
    headline: "Quran Reading & Tajweed Teacher for Kids and Beginners",
    specialisation: "Quran Reading, Tajweed, Noorani Qaida",
    qualifications: ["Hifz-ul-Quran", "Tajweed Certification", "Islamic Studies Certification"],
    courses: ["quran-for-kids", "tajweed", "noorani-qaida", "islamic-studies"],
    suitableFor: ["Kids", "Beginners", "Sisters"],
    languages: ["English", "Urdu", "Arabic"],
    studentAge: "5 to 16 Years",
    teachingStyle:
      "Patient, friendly and interactive. Focuses on correct pronunciation, confidence and gradual progress.",
    bio: "Ustadha Ayesha specialises in helping beginners build a strong foundation in Quran reading. She enjoys working with children and creates a comfortable, encouraging learning environment.",
  },
  {
    slug: "ustadha-maryam-siddiqui",
    honorific: "Ustadha",
    name: "Maryam Siddiqui",
    gender: "female",
    photo: "/images/teachers/female-teacher-placeholder.webp",
    experience: "6+ Years",
    headline: "Quran Teacher Specialised in Teaching Children",
    specialisation: "Quran for Kids, Noorani Qaida",
    qualifications: ["Hifz-ul-Quran", "Tajweed Certification", "Quran Teaching Certification"],
    courses: ["quran-for-kids", "noorani-qaida", "islamic-studies"],
    suitableFor: ["Kids", "Beginners"],
    languages: ["English", "Urdu", "Pashto"],
    studentAge: "4 to 12 Years",
    teachingStyle:
      "Warm, engaging and interactive. Uses age-appropriate activities to keep young students focused and motivated.",
    bio: "Ustadha Maryam specialises in teaching young children and beginners, making lessons enjoyable while building correct pronunciation, reading skills and confidence.",
  },
  {
    slug: "ustadha-hafsa-noor",
    honorific: "Ustadha",
    name: "Hafsa Noor",
    gender: "female",
    photo: "/images/teachers/female-teacher-placeholder.webp",
    experience: "8+ Years",
    headline: "Hifz & Quran Memorisation Teacher",
    specialisation: "Hifz, Quran Memorisation and Revision",
    qualifications: ["Hifz-ul-Quran", "Tajweed Certification", "Islamic Studies Certification"],
    courses: ["hifz", "tajweed", "islamic-studies"],
    suitableFor: ["Kids", "Teenagers", "Sisters"],
    languages: ["English", "Urdu", "Arabic"],
    studentAge: "8+ Years",
    teachingStyle:
      "Structured, supportive and consistent. Focuses on memorisation, revision and long-term retention.",
    bio: "Ustadha Hafsa specialises in Quran memorisation and revision, helping students build consistent memorisation routines while maintaining accurate recitation.",
  },
  {
    slug: "ustadha-sumaiya-khan",
    honorific: "Ustadha",
    name: "Sumaiya Khan",
    gender: "female",
    photo: "/images/teachers/female-teacher-placeholder.webp",
    experience: "5+ Years",
    headline: "Quran Teacher for Adults, Sisters and Reverts",
    specialisation: "Adult Quran Learning and Quran for Reverts",
    qualifications: ["Alimah Course", "Tajweed Certification", "Quran Teaching Certification"],
    courses: ["tajweed", "islamic-studies", "quran-for-reverts", "quran-for-adults"],
    suitableFor: ["Adults", "Sisters", "Beginners", "Reverts"],
    languages: ["English", "Urdu", "Arabic"],
    studentAge: "16+ Years",
    teachingStyle:
      "Calm, respectful and personalised, adjusting lessons to the student's level and learning goals.",
    bio: "Ustadha Sumaiya teaches adult learners, sisters and beginners, including students starting from the basics or returning to Quran learning after a long break.",
  },
  {
    slug: "ustadha-fatima-zahra",
    honorific: "Ustadha",
    name: "Fatima Zahra",
    gender: "female",
    photo: "/images/teachers/female-teacher-placeholder.webp",
    experience: "9+ Years",
    headline: "Advanced Tajweed & Quran Recitation Teacher",
    specialisation: "Tajweed and Quran Recitation",
    qualifications: ["Hifz-ul-Quran", "Advanced Tajweed Certification", "Quran Ijazah"],
    courses: ["tajweed", "hifz"],
    suitableFor: ["Adults", "Sisters", "Advanced Students"],
    languages: ["English", "Urdu", "Arabic", "Pashto"],
    studentAge: "13+ Years",
    teachingStyle:
      "Detailed, focused and encouraging, with individual correction to improve pronunciation and recitation.",
    bio: "Ustadha Fatima Zahra has extensive experience helping students improve their Quranic pronunciation, fluency and application of Tajweed rules, working with both developing and advanced students.",
  },
  {
    slug: "ustadh-abdullah-ahmed",
    honorific: "Ustadh",
    name: "Abdullah Ahmed",
    gender: "male",
    photo: "/images/teachers/ustadh-abdullah-ahmed.webp",
    experience: "10+ Years",
    headline: "Experienced Quran & Tajweed Teacher",
    specialisation: "Tajweed and Quran Reading",
    qualifications: ["Hifz-ul-Quran", "Advanced Tajweed Certification", "Quran Teaching Certification"],
    courses: ["tajweed", "hifz", "islamic-studies"],
    suitableFor: ["Adults", "Teenagers", "Advanced Students"],
    languages: ["English", "Urdu", "Arabic", "Pashto"],
    studentAge: "12+ Years",
    teachingStyle: "Structured, clear and focused on consistent improvement.",
    bio: "Ustadh Abdullah has more than ten years of Quran teaching experience, specialising in Tajweed and Quran recitation, helping students improve their pronunciation, fluency and confidence.",
  },
  {
    slug: "ustadh-muhammad-hamza",
    honorific: "Ustadh",
    name: "Muhammad Hamza",
    gender: "male",
    photo: "/images/teachers/ustadh-muhammad-hamza.webp",
    experience: "6+ Years",
    headline: "Quran Teacher for Kids and Beginners",
    specialisation: "Noorani Qaida and Quran for Kids",
    qualifications: ["Hifz-ul-Quran", "Tajweed Certification", "Islamic Studies Certification"],
    courses: ["noorani-qaida", "quran-for-kids", "islamic-studies"],
    suitableFor: ["Kids", "Beginners"],
    languages: ["English", "Urdu", "Pashto"],
    studentAge: "4 to 13 Years",
    teachingStyle: "Friendly, patient and interactive, adapting lessons to the child's age and ability.",
    bio: "Ustadh Hamza specialises in teaching children and beginners, starting with the fundamentals and gradually developing reading, pronunciation and confidence.",
  },
  {
    slug: "ustadh-bilal-farooq",
    honorific: "Ustadh",
    name: "Bilal Farooq",
    gender: "male",
    photo: "/images/teachers/ustadh-bilal-farooq.webp",
    experience: "8+ Years",
    headline: "Hifz & Quran Memorisation Teacher",
    specialisation: "Hifz and Quran Revision",
    qualifications: ["Hifz-ul-Quran", "Tajweed Certification", "Quran Memorisation Training"],
    courses: ["hifz", "tajweed"],
    suitableFor: ["Kids", "Teenagers", "Adults"],
    languages: ["English", "Urdu", "Arabic"],
    studentAge: "8+ Years",
    teachingStyle: "Organised, motivating and focused on consistent daily progress.",
    bio: "Ustadh Bilal specialises in Quran memorisation and revision, building structured memorisation plans around each student's pace.",
  },
  {
    slug: "ustadh-omar-khalid",
    honorific: "Ustadh",
    name: "Omar Khalid",
    gender: "male",
    photo: "/images/teachers/ustadh-omar-khalid.webp",
    experience: "7+ Years",
    headline: "Quran Teacher for Adults and Reverts",
    specialisation: "Adult Quran Learning and Quran for Reverts",
    qualifications: ["Alim Course", "Hifz-ul-Quran", "Tajweed Certification"],
    courses: ["tajweed", "islamic-studies", "quran-for-reverts", "quran-for-adults"],
    suitableFor: ["Adults", "Beginners", "Reverts"],
    languages: ["English", "Urdu", "Arabic"],
    studentAge: "16+ Years",
    teachingStyle: "Patient, conversational and personalised.",
    bio: "Ustadh Omar teaches adult students from beginner to advanced levels, particularly those starting their Quran journey later in life or returning after a long break.",
  },
  {
    slug: "ustadh-yusuf-mahmood",
    honorific: "Ustadh",
    name: "Yusuf Mahmood",
    gender: "male",
    photo: "/images/teachers/ustadh-yusuf-mahmood.webp",
    experience: "5+ Years",
    headline: "Quran & Islamic Studies Teacher for Families",
    specialisation: "Islamic Studies and Quran Education",
    qualifications: ["Alim Course", "Hifz-ul-Quran", "Tajweed Certification"],
    courses: ["islamic-studies", "tajweed", "noorani-qaida"],
    suitableFor: ["Kids", "Teenagers", "Adults", "Beginners"],
    languages: ["English", "Urdu", "Arabic"],
    studentAge: "6+ Years",
    teachingStyle: "Clear, engaging and discussion based, connecting Quran lessons with practical Islamic knowledge.",
    bio: "Ustadh Yusuf combines Quran lessons with Islamic knowledge appropriate to the student's age and level, helping students understand and apply what they learn.",
  },
  {
    slug: "ustadh-ibrahim-raza",
    honorific: "Ustadh",
    name: "Ibrahim Raza",
    gender: "male",
    photo: "/images/teachers/ustadh-ibrahim-raza.webp",
    experience: "9+ Years",
    headline: "Advanced Quran Recitation & Tajweed Teacher",
    specialisation: "Advanced Quran Recitation, Tajweed and Revision",
    qualifications: ["Hifz-ul-Quran", "Advanced Tajweed Certification", "Quran Ijazah"],
    courses: ["tajweed", "hifz"],
    suitableFor: ["Adults", "Teenagers", "Advanced Students"],
    languages: ["English", "Urdu", "Arabic", "Pashto"],
    studentAge: "13+ Years",
    teachingStyle: "Focused, systematic and personalised, with detailed correction and regular progress reviews.",
    bio: "Ustadh Ibrahim specialises in improving Quranic recitation and Tajweed for students who already read the Quran and want to improve fluency, pronunciation and accuracy.",
  },
];

export function teachersForCourse(course: CourseSlug, count = 3): Teacher[] {
  return teachers.filter((t) => t.courses.includes(course)).slice(0, count);
}

export function femaleTeachers(): Teacher[] {
  return teachers.filter((t) => t.gender === "female");
}

export function teacherBySlug(slug: string): Teacher | undefined {
  return teachers.find((t) => t.slug === slug);
}
