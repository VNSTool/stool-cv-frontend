import * as notificationConfig from "~/constants/notification";

export default {
  data: function () {
    return {
      isShow: false,
      isRemoved: false,
      transistionTime: 0,
      displayTime: 0,
      delayTime: 0,
    };
  },
  props: {
    notification: Object,
  },
  computed: {
    transitionStyle: function () {
      return {
        [`duration-${this.transistionTime}`]: true,
        "max-w-0": !this.isShow,
        "max-w-75 px-5 py-3": this.isShow,
        hidden: this.isRemoved,
      };
    },
  },
  methods: {
    show: function () {
      this.isShow = true;
      setTimeout(this.hide, this.displayTime);
    },
    hide: function () {
      this.isShow = false;
      setTimeout(() => {
        this.isRemoved = true;
        this.$store.commit("notifications/remove", this.notification.id);
      }, this.transistionTime);
    },
  },
  mounted() {
    this.transistionTime =
      notificationConfig[`${this.notification.type}_TRANSITION_TIME`];
    this.displayTime =
      notificationConfig[`${this.notification.type}_DISPLAY_TIME`];
    this.delayTime = notificationConfig[`${this.notification.type}_DELAY_TIME`];
    setTimeout(this.show, this.delayTime);
  },
};
