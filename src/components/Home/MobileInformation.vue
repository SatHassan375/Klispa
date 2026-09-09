<template>
  <section class="container--medium feature-story" id="features">
    <div
      v-for="feature in features"
      :key="feature.id"
      :id="feature.anchor"
      class="feature"
      :class="`feature--${feature.imagePosition}`"
    >
      <!-- Image -->
      <div class="feature__image">
        <video
          :src="feature.image"
          :aria-label="feature.title"
          width="308"
          height="516"
          autoplay
          loop
          muted
          playsinline
        ></video>
      </div>

      <!-- Content -->
      <div class="feature__content">
        <div class="feature__eyebrow">
          <span>{{ feature.eyebrow }}</span>
          <span class="feature__line"></span>
        </div>

        <h2 class="feature__title">
          {{ feature.title }}
        </h2>

        <p class="feature__description">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import widgetFeatureVideo from "../../assets/gifs/WidgetFeature.mp4";
import safeSpaceVideo from "../../assets/gifs/SafeSpace.mp4";
import moodVideo from "../../assets/gifs/Mood.mp4";
import meetupVideo from "../../assets/gifs/Meetup.mp4";
import memoryVideo from "../../assets/gifs/Memory.mp4";
import wrappedVideo from "../../assets/gifs/Wrapped.mp4";

const features = [
  {
    id: 1,
    image: widgetFeatureVideo,
    imagePosition: "left",
    eyebrow: "A PHOTO ON THEIR HOME SCREEN",
    title: "A little piece of your day on their screen.",
    description:
      "Send one photo that lives on their home-screen widget for 24 hours. No caption required. No conversation required. Just a small way to stay present.",
  },

  {
    id: 2,
    image: safeSpaceVideo,
    imagePosition: "right",
    eyebrow: "SAVE SPACE",
    title: "Some conversations should stay between you two.",
    description:
      "With Safe Space, screenshots are blocked outright. Nothing forwards. Nothing copies. And conversations marked Safe Space stay completely out of shared stats and Wrapped.",
  },

  {
    id: 3,
    image: moodVideo,
    imagePosition: "left",
    eyebrow: "Mood & chat",
    title: "See how they're feeling, not just if they're online",
    description:
      "Everyone sets a written mood in their own words, one line, honest, no format. It shows next to their name before you even open the chat.",
  },

  {
    id: 4,
    image: meetupVideo,
    imagePosition: "right",
    anchor: "proximity",
    eyebrow: "Proximity meetups",
    title: "Meet when the moment is right.",
    description:
      "When you're both nearby, Klispa suggests meeting up and creates the event in a single tap.",
  },

  {
    id: 5,
    image: memoryVideo,
    imagePosition: "left",
    anchor: "memories",
    eyebrow: "A quiet archive",
    title: "Memories you both name, tagged with how it felt",
    description:
    "Not a camera roll. A named, dated collection of moments that mattered, tagged with the mood you were both in when they happened.",
  },

  {
    id: 6,
    image: wrappedVideo,
    imagePosition: "right",
    anchor: "wrapped",
    eyebrow: "Every relationship",
    title: "Every relationship writes its own story.",
    description:
      "Daily, weekly, monthly, and yearly. Most labels get a Together Wrapped, your combined story, not just yours alone.",
  },
];
</script>

<style scoped>
.container--medium {
  padding-inline: 1rem;
}
.feature-story {
  padding-top: 112px;
  scroll-margin-top: calc(var(--header-height) + 16px);
}

.feature {
  display: flex;
  align-items: center;
  gap: 72px;
  min-height: 516px;
  padding-bottom: 96px;
  scroll-margin-top: calc(var(--header-height) + 16px);
}

/* =========================================================
   Image Position
   ========================================================= */

.feature--left {
  flex-direction: row;
}

.feature--right {
  flex-direction: row-reverse;
}

/* =========================================================
   Image
   ========================================================= */

.feature__image {
  flex: 0 0 308px;
  width: 308px;
  height: 516px;
}

.feature__image img,
.feature__image video {
  display: block;

  width: 308px;
  height: 516px;

  object-fit: contain;
}

/* =========================================================
   Content
   ========================================================= */

.feature__content {
  flex: 1;
  min-width: 0;
}

/* Eyebrow */

.feature__eyebrow {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: 16px;

  margin-bottom: 24px;

  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  color: var(--color-primary);
}

.feature__line {
  width: 72px;
  height: 1px;

  background: var(--color-border);
}

/* Title */

.feature__title {
  max-width: 700px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 500;
  line-height: 43px;
  color: var(--color-black);
}

/* Description */

.feature__description {
  max-width: 700px;

  margin: 16px 0 0;

  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-text-secondary);
}

/* =========================================================
   Responsive
   ========================================================= */

@media (max-width: 900px) {
  .feature-story {
    gap: 96px;
  }

  .feature,
  .feature--left,
  .feature--right {
    flex-direction: column;
    align-items: center;
    gap: 40px;

    min-height: auto;
  }

  .feature__content {
    width: 100%;
    text-align: center;
  }

  .feature__eyebrow {
    justify-content: center;
  }

  .feature__title,
  .feature__description {
    margin-inline: auto;
  }
  .feature-story {
    padding-top: 0px;
  }
}

@media (max-width: 600px) {
  .feature-story {
    gap: 80px;
  }

  .feature {
    gap: 32px;
  }

  .feature__image,
  .feature__image img,
  .feature__image video {
    width: 260px;
    height: auto;
  }

  .feature__title {
    font-size: 28px;
    line-height: 34px;
  }

  .feature__description {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
