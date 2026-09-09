// Single source of truth for the 8 relationship states.
// The scroll section renders itself entirely from this array —
// no relationship is ever hardcoded into a component.

export const relationships = [
  {
    id: "soulmate",
    label: "RELATIONSHIP",
    type: "Mutual",
    status: "Locked",
    title: "Soulmate",
    icon: "soulmate",
    description:
      "Your most consistent, deepest connection. Unlocked only when both agree. Can't be removed unless both agree. DND bypass enabled. Calls always come through.",
    accent: "#e0455c",
    accentSoft: "#fbe9ec",
    features: [
      {
        key: "home-screen-photo",
        icon: "widget",
        title: "A photo of you on their home screen",
        description: "Replaced every 24 hours. No caption, no reply expected.",
      },
      {
        key: "see-each-other-typing",
        icon: "eye",
        title: "You see each other typing",
        description:
          "The message as it forms. Both switch it on separately, or neither does.",
      },
      {
        key: "private-map-always-on",
        icon: "pin",
        title: "A private map, always on",
        description: "Two dots, permanently, nobody else on it.",
      },
      {
        key: "calls-always-ring",
        icon: "phone",
        title: "Your calls always ring",
        description: "Through silent, through Focus, through Do Not Disturb.",
      },
      {
        key: "shared-wrapped",
        icon: "gift",
        title: "A shared Wrapped section",
        description: "The only two-person section where you both see the same thing.",
      },
      {
        key: "date-night-anniversary-templates",
        icon: "gift",
        title: "Date Night + Anniversary Plan templates",
        description: "Two event templates only Soulmates can send.",
      },
      {
        key: "soulmate-only-badges",
        icon: "crown",
        title: "Soulmate-only badges",
        description: "Achievements that need this label to unlock.",
      },
      {
        key: "their-birthday",
        icon: "cake",
        title: "Their birthday",
        description: "With enough notice to actually do something.",
      },
      {
        key: "your-anniversary",
        icon: "cake",
        title: "Your anniversary",
        description: "The day you first connected, every year.",
      },
    ],
  },
  {
    id: "situationship",
    label: "RELATIONSHIP",
    type: "Mutual",
    status: null,
    title: "Situationship",
    icon: "situationship",
    description:
      "For when it's complicated. Both acknowledge the label privately. It doesn't show publicly. Can be upgraded or removed by either person.",
    accent: "#6a5cf0",
    accentSoft: "#edeafc",
    features: [
      {
        key: "section-only-you-see",
        icon: "gift",
        title: "A section only you see",
        description:
          "Excluded from the shareable card and the overall section. They never know it's there.",
      },
      {
        key: "see-each-other-typing",
        icon: "eye",
        title: "You see each other typing",
        description: "Both opt in separately.",
      },
      {
        key: "map-wakes-at-night",
        icon: "pin",
        title: "A map that only wakes at night",
        description: "After 10pm, and only if you both left it on.",
      },
      {
        key: "end-it-without-a-trace",
        icon: "phone",
        title: "End it without a trace",
        description: "Either person. No notification, no record, nothing kept.",
      },
    ],
  },
  {
    id: "flame",
    label: "RELATIONSHIP",
    type: "Auto",
    status: null,
    title: "Flame",
    icon: "flame",
    description:
      "You've been each other's most-messaged person for 7 days straight. Shown next to their name. Fades if the streak breaks.",
    accent: "#e8871e",
    accentSoft: "#fdf1e2",
    features: [
      {
        key: "flame-beside-name",
        icon: "gift",
        title: "A flame beside their name",
        description: "Anyone you've labelled can see it burning.",
      },
      {
        key: "top-of-wrapped",
        icon: "gift",
        title: "Top of your Wrapped",
        description:
          "A Wrapped section only you can see. Never shared, never shown to them.",
      },
      {
        key: "hours-warning-before-it-goes-out",
        icon: "flameSlash",
        title: "A few hours' warning before it goes out",
        description:
          "Not a notification after the fact. Suppressed on Person and Safe Space.",
      },
      {
        key: "flame-history",
        icon: "flameSlash",
        title: "Flame history",
        description:
          "A private record of who your #1 has been, and for how long.",
      },
    ],
  },
  {
    id: "my-person",
    label: "RELATIONSHIP",
    type: "Mutual",
    status: null,
    title: "My person",
    icon: "myperson",
    description:
      '"They\'re my person." A soft, intentional label both set for each other. No romantic implication, just closeness. One person each.',
    accent: "#1f2430",
    accentSoft: "#eeeef1",
    features: [
      {
        key: "home-screen-photo",
        icon: "widget",
        title: "A photo of you on their home screen",
        description: "The same widget Soulmate gets. Only these two labels have it.",
      },
      {
        key: "always-in-monthly-wrapped",
        icon: "gift",
        title: "Always in your monthly Wrapped",
        description:
          "Guaranteed, even in a month you barely spoke. Everyone else earns their place by activity.",
      },
      {
        key: "map-on-your-schedule",
        icon: "pin",
        title: "A map on your schedule",
        description: "You set the hours, it switches itself off.",
      },
      {
        key: "birthday-reminder",
        icon: "cake",
        title: "Birthday Reminder",
        description: "Plan celebrations together. Mark special occasions in style.",
      },
      {
        key: "no-streak-counter",
        icon: "flameSlash",
        title: "No streak counter. No warnings.",
        description: "This friendship never asks anything of you.",
      },
    ],
  },
  {
    id: "safe-space",
    label: "RELATIONSHIP",
    type: "Mutual",
    status: null,
    title: "Safe Space",
    icon: "safespace",
    description:
      "For a friend you go to when things are hard. Conversations here are always private — no screenshots, no forwards.",
    accent: "#2ea16f",
    accentSoft: "#e7f6ee",
    features: [
      {
        key: "screenshots-stop-working",
        icon: "cameraOff",
        title: "Screenshots stop working",
        description: "Not flagged, not notified. The button does nothing.",
      },
      {
        key: "nothing-leaves-the-room",
        icon: "ban",
        title: "Nothing leaves the room",
        description: "No forwards, no copying, no saving out.",
      },
      {
        key: "invisible-everywhere",
        icon: "gift",
        title: "Invisible everywhere",
        description:
          "Never in any Wrapped section, never on the shareable card, no flame, no streak, no public badge.",
      },
      {
        key: "calls-ring-through-silent",
        icon: "phone",
        title: "Their calls still ring through silent",
        description: "The whole point is that you can reach them.",
      },
      {
        key: "comfort-day",
        icon: "phone",
        title: "Comfort Day",
        description: "An event template with no agenda. This label only.",
      },
    ],
  },
  {
    id: "constant",
    label: "RELATIONSHIP",
    type: "Earned",
    status: null,
    title: "Constant",
    icon: "constant",
    description:
      "365 days of consistent conversation. Automatically earned, never manually assigned. The longest friendship badge.",
    accent: "#7c5cf0",
    accentSoft: "#efeafc",
    features: [
      {
        key: "location-shares-itself",
        icon: "pin",
        title: "Location that shares itself",
        description:
          "A 2-hour window opens whenever either of you is moving. Capped by the label's own restriction, if it has one.",
      },
      {
        key: "your-name-on-invite",
        icon: "calendar",
        title: "Your name on the invite",
        description: "Co-host events instead of just attending them.",
      },
      {
        key: "weekend-trip",
        icon: "calendar",
        title: "Weekend Trip",
        description: "Destination, dates, split costs. This status only.",
      },
      {
        key: "near-each-other-alert",
        icon: "calendar",
        title: "The app tells you when you're near each other",
        description: "One tap turns it into a plan.",
      },
      {
        key: "year-plus-badges",
        icon: "heartHandshake",
        title: "The year-plus badges",
        description: "Achievements that need 365+ days.",
      },
    ],
  },
  {
    id: "the-circle",
    label: "RELATIONSHIP",
    type: "Mutual",
    status: null,
    title: "The Circle",
    icon: "thecircle",
    description:
      "A group where everyone has each other labeled as close friends. The tightest group tier.",
    accent: "#e2493f",
    accentSoft: "#fbeae8",
    features: [
      {
        key: "circle-wrapped",
        icon: "gift",
        title: "Circle Wrapped",
        description:
          "The only shared group Wrapped in the app, stats for the whole group together.",
      },
      {
        key: "group-streak",
        icon: "flameSlash",
        title: "Group streak",
        description:
          "The only label where captures are prevented entirely, not just alerted.",
      },
      {
        key: "full-event-access",
        icon: "calendar",
        title: "full event access",
        description: "Co-host events. Celebrate milestones together.",
      },
      {
        key: "proximity-meetup",
        icon: "users",
        title: "Proximity meetup",
        description: "Messages here cannot leave this conversation. Period.",
      },
      {
        key: "shared-group-achievements",
        icon: "heartHandshake",
        title: "Shared group achievements",
        description: "Badges earned by all of you, or by none of you.",
      },
    ],
  },
  {
    id: "legacy",
    label: "RELATIONSHIP",
    type: "Earned",
    status: null,
    title: "Legacy",
    icon: "legacy",
    description:
      "You've been each other's top friend for 2+ years continuously. The rarest badge. Only one person can hold it.",
    accent: "#e0a415",
    accentSoft: "#fcf3e0",
    features: [
      {
        key: "yearly-wrapped-all-the-way-back",
        icon: "gift",
        title: "Your yearly Wrapped goes all the way back",
        description:
          "Every milestone, streak record, memory and anniversary since your first message.",
      },
      {
        key: "gold-badge-private",
        icon: "crown",
        title: "A gold badge, private between the two of you",
        description: "Nobody else can see it.",
      },
      {
        key: "annual-connection-alert",
        icon: "bell",
        title: "An alert every year on the day you first connected",
        description: "Both of you, with a memory surfaced.",
      },
      {
        key: "annual-tradition-templates",
        icon: "calendar",
        title: "Annual Tradition + Friendship Anniversary templates.",
        description:
          "7 days before your anniversary, app prompts both of you to create an event to mark it.",
      },
      {
        key: "badges-arrive-faster",
        icon: "heartHandshake",
        title: "Badges arrive faster",
        description: "Streak achievements at three-quarters of the usual days.",
      },
    ],
  },
];

export default relationships;
