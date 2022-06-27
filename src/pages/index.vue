<template>
  <div class="flex flex-col gap-5">
    <Profile />
    <ExperienceHistory />
    <SkillsAggregation />
    <JobSharing />
    <PageInformation />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Curriculum Vitae",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "This page is Tri's curriculum vitae. You can find my experiences and skills here, also hire me by share me jod details.",
        },
      ],
    };
  },
};
</script>
