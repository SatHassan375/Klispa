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
      "The deepest connection label, reserved for one person and removable only when both agree.",
    accent: "#e0455c",
    accentSoft: "#fbe9ec",
    features: [
      {
        key: "daily-widget-photo",
        icon: "widget",
        title: "Daily widget photo",
        description: "Shows their photo directly in your daily widget.",
      },
      {
        key: "live-typing-preview",
        icon: "eye",
        title: "Live typing preview",
        description: "Shows when they are actively typing to you.",
      },
      {
        key: "always-on-location",
        icon: "pin",
        title: "Always-on location",
        description: "Keeps location sharing continuously available.",
      },
      {
        key: "dnd-bypass",
        icon: "bell",
        title: "DND bypass",
        description: "Lets their important notifications bypass Do Not Disturb.",
      },
      {
        key: "shared-wrapped-section",
        icon: "gift",
        title: "Shared Wrapped section",
        description: "Gives your connection its own shared Wrapped section.",
      },
      {
        key: "date-night-template",
        icon: "moon",
        title: "Date Night template",
        description: "Provides a ready-made template for planning date night.",
      },
      {
        key: "anniversary-plan-template",
        icon: "calendar",
        title: "Anniversary Plan template",
        description: "Provides a ready-made template for planning anniversaries.",
      },
      {
        key: "soulmate-only-badges",
        icon: "crown",
        title: "Soulmate-only badges",
        description: "Unlocks badges reserved specifically for Soulmate connections.",
      },
      {
        key: "birthday-anniversary-reminders",
        icon: "cake",
        title: "Birthday + anniversary reminders",
        description: "Reminds you about important birthdays and anniversaries.",
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
      "A private label for a complicated connection that both people acknowledge without making it public.",
    accent: "#6a5cf0",
    accentSoft: "#edeafc",
    features: [
      {
        key: "private-wrapped-section",
        icon: "gift",
        title: "Private Wrapped section",
        description: "Keeps this connection inside a private Wrapped section.",
      },
      {
        key: "live-typing-preview",
        icon: "eye",
        title: "Live typing preview",
        description: "Shows when they are actively typing to you.",
      },
      {
        key: "location-after-10pm",
        icon: "pin",
        title: "Location after 10pm",
        description: "Makes their location available after 10pm.",
      },
      {
        key: "removable-without-a-trace",
        icon: "phone",
        title: "Removable without a trace",
        description: "Lets either person remove the label without leaving a trace.",
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
      "Earned after seven consecutive days as each other's most-messaged person, and lost when the streak breaks.",
    accent: "#e8871e",
    accentSoft: "#fdf1e2",
    features: [
      {
        key: "shown-next-to-their-name",
        icon: "flame",
        title: "Shown next to their name",
        description: "Displays the Flame directly beside their name.",
      },
      {
        key: "pinned-in-wrapped",
        icon: "gift",
        title: "Pinned #1 in your Wrapped",
        description: "Places this connection first in your Wrapped.",
      },
      {
        key: "streak-break-warning",
        icon: "bell",
        title: "Streak break warning",
        description: "Warns you when your messaging streak is at risk.",
      },
      {
        key: "flame-history",
        icon: "flameSlash",
        title: "Flame history",
        description: "Keeps a history of your earned Flame streaks.",
      },
    ],
  },
  {
    id: "my-person",
    label: "RELATIONSHIP",
    type: "Mutual",
    status: null,
    title: "Person",
    icon: "myperson",
    description:
      "A close, intentional label for someone who is deeply important without implying romance.",
    accent: "#1f2430",
    accentSoft: "#eeeef1",
    features: [
      {
        key: "daily-widget-photo",
        icon: "widget",
        title: "Daily widget photo",
        description: "Shows their photo directly in your daily widget.",
      },
      {
        key: "always-in-monthly-wrapped",
        icon: "gift",
        title: "Always in your monthly Wrapped",
        description: "Keeps this connection present throughout your monthly Wrapped.",
      },
      {
        key: "location-on-your-timer",
        icon: "pin",
        title: "Location on your timer",
        description: "Makes their location available through your connection.",
      },
      {
        key: "birthday-reminder",
        icon: "cake",
        title: "Birthday reminder",
        description: "Reminds you when their birthday is approaching.",
      },
      {
        key: "no-streak-counter",
        icon: "flameSlash",
        title: "No streak counter, no warnings",
        description: "Keeps the connection free from streak pressure or warnings.",
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
      "A private label for someone you turn to when things are difficult and you need trust.",
    accent: "#2ea16f",
    accentSoft: "#e7f6ee",
    features: [
      {
        key: "screenshots-fully-blocked",
        icon: "cameraOff",
        title: "Screenshots fully blocked",
        description: "Prevents screenshots of conversations under this label.",
      },
      {
        key: "no-forwards-no-copy",
        icon: "ban",
        title: "No forwards, no copy",
        description: "Prevents conversations from being forwarded or copied.",
      },
      {
        key: "invisible-everywhere",
        icon: "gift",
        title: "Invisible everywhere",
        description: "Keeps the label hidden throughout the visible experience.",
      },
      {
        key: "dnd-bypass",
        icon: "bell",
        title: "DND bypass",
        description: "Lets important notifications bypass Do Not Disturb.",
      },
      {
        key: "comfort-day-template",
        icon: "calendar",
        title: "Comfort Day template",
        description: "Provides a ready-made template for planning a comfort day.",
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
      "A milestone earned after maintaining a connected relationship for 100 days.",
    accent: "#7c5cf0",
    accentSoft: "#efeafc",
    features: [
      {
        key: "auto-location-2h-window",
        icon: "pin",
        title: "Auto location, 2h window",
        description: "Automatically shares location within a two-hour window.",
      },
      {
        key: "event-co-hosting",
        icon: "calendar",
        title: "Event co-hosting",
        description: "Lets both people co-host shared events together.",
      },
      {
        key: "weekend-trip-template",
        icon: "calendar",
        title: "Weekend Trip template",
        description: "Provides a ready-made template for planning weekend trips.",
      },
      {
        key: "100-day-badges",
        icon: "trophy",
        title: "100-day badges",
        description: "Unlocks badges recognizing the 100-day connection.",
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
      "A group milestone earned when everyone in the group has labelled everyone else.",
    accent: "#e2493f",
    accentSoft: "#fbeae8",
    features: [
      {
        key: "circle-wrapped",
        icon: "gift",
        title: "Circle Wrapped",
        description: "Gives the group its own dedicated Wrapped experience.",
      },
      {
        key: "group-streak",
        icon: "flame",
        title: "Group streak",
        description: "Tracks the group's shared connection streak over time.",
      },
      {
        key: "group-badges",
        icon: "trophy",
        title: "Group badges",
        description: "Unlocks badges recognizing shared group milestones.",
      },
      {
        key: "night-in-template",
        icon: "moon",
        title: "Night In template",
        description: "Provides a ready-made template for planning group nights in.",
      },
      {
        key: "group-celebration-template",
        icon: "party",
        title: "Group Celebration template",
        description: "Provides a ready-made template for planning group celebrations.",
      },
      {
        key: "anyone-can-co-host",
        icon: "users",
        title: "Anyone can co-host",
        description: "Lets any member co-host eligible group activities.",
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
      "A long-term friendship milestone earned after 365 connected days and held by one person.",
    accent: "#e0a415",
    accentSoft: "#fcf3e0",
    features: [
      {
        key: "full-friendship-timeline",
        icon: "gift",
        title: "Full friendship timeline in yearly Wrapped",
        description: "Shows the complete friendship timeline in yearly Wrapped.",
      },
      {
        key: "gold-badge-private",
        icon: "crown",
        title: "Gold badge, private",
        description: "Awards a private gold badge for the milestone.",
      },
      {
        key: "annual-anniversary-alert",
        icon: "bell",
        title: "Annual anniversary alert",
        description: "Sends an alert when the annual milestone arrives.",
      },
      {
        key: "annual-tradition-template",
        icon: "calendar",
        title: "Annual Tradition template",
        description: "Provides a ready-made template for planning annual traditions.",
      },
      {
        key: "friendship-anniversary-template",
        icon: "calendar",
        title: "Friendship Anniversary template",
        description:
          "Provides a ready-made template for celebrating friendship anniversaries.",
      },
      {
        key: "badges-arrive-faster",
        icon: "trophy",
        title: "Badges arrive faster",
        description: "Unlocks eligible badges faster through the Legacy label.",
      },
    ],
  },
];

export default relationships;
