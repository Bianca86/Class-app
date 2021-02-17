export const data = {
  account: {
    id: "avsHJEfL-S",
    loggedIn: false,
    first_name: "Adrian",
    last_name: "McCarty",
    profile_URL: "/adrian-mccarty",
    email: "adrian-mccarty@itschool.ro",
    avatar: {
      small: "https://source.unsplash.com/120x120",
      medium: "https://source.unsplash.com/80x80",
      large: "https://source.unsplash.com/40x40",
    },
  },
  notifications: [
    {
      read: false,
      senderID: "kdj86QFiMt",
      content: "Has liked your post.",
      notification_URL: "/",
    },
    {
      read: false,
      senderID: "IX9xH6xuVr",
      content: "Has new posts",
      notification_URL: "/claire-macias",
    },
  ],
  messages: [
    {
      read: false,
      senderID: "ibgMUXeYBT",
      message: "Hey. Still on for today?",
    },
    {
      read: false,
      senderID: "hGZ3Z--AW6",
      message: "Quick update: we started work on the social media paltform.",
    },
  ],
  posts: [
    {
      author: "hGZ3Z--AW6",
      date: "01/01/2021",
      content: {
        text:
          "Started working at IT School. Awesome experience working with the team.",
        video: undefined,
        image: [],
      },
      likes: ["OCsHJEfL-S", "kdj86QFiMt", "IX9xH6xuVr", "ibgMUXeYBT"],
      comments: [
        {
          user: "l-dn0NDBoL",
          comment_text: "Glad you like it. Meeting next week?",
        },
      ],
      shares: ["l-dn0NDBoL", "j9dWLiXt-O", "ochK5smeYA"],
    },
    {
      author: "ibgMUXeYBT",
      date: "02/01/2021",
      content: {
        text: "Saw this earlier today and had to share.",
        video: undefined,
        image: ["https://source.unsplash.com/800x600"],
      },
      likes: ["OCsHJEfL-S", "kdj86QFiMt", "IX9xH6xuVr", "ibgMUXeYBT"],
      comments: [
        {
          user: "l-dn0NDBoL",
          comment_text: "Be there soon. See you",
        },
        {
          user: "ibgMUXeYBT",
          comment_text: "That looks amazing :O",
        },
        {
          user: "IX9xH6xuVr",
          comment_text: "Looks great. See you when you get back.",
        },
        {
          user: "l-dn0NDBoL",
          comment_text: "Thank you, guys :D",
        },
      ],
      shares: ["l-dn0NDBoL", "j9dWLiXt-O", "ochK5smeYA"],
    },
    {
      author: "hGZ3Z--AW6",
      date: "14/01/2021",
      content: {
        text: "Just look at this. Absolutely wonderful.",
        video: undefined,
        image: [
          "https://source.unsplash.com/801x600",
          "https://source.unsplash.com/802x600",
        ],
      },
      likes: ["OCsHJEfL-S", "kdj86QFiMt", "IX9xH6xuVr", "ibgMUXeYBT"],
      comments: [],
      shares: ["ochK5smeYA"],
    },
    {
      author: "sKqFMspF7f",
      date: "21/01/2021",
      content: {
        text: "So, anyone else seen this?",
        video: undefined,
        image: [
          "https://source.unsplash.com/803x600",
          "https://source.unsplash.com/804x600",
        ],
      },
      likes: ["OCsHJEfL-S", "kdj86QFiMt", "IX9xH6xuVr", "ibgMUXeYBT"],
      comments: [
        {
          user: "l-dn0NDBoL",
          comment_text: "Hahaha. Seen it earlier today :))",
        },
      ],
      shares: ["l-dn0NDBoL"],
    },
    {
      author: "sKqFMspF7f",
      date: "21/01/2021",
      content: {
        text: "Does this count as a meme? Help, pls.",
        video: undefined,
        image: ["https://source.unsplash.com/805x600"],
      },
      likes: ["ibgMUXeYBT"],
      comments: [
        {
          user: "OCsHJEfL-S",
          comment_text: "Yes. THIS is a true meme. Sharing right now :)",
        },
      ],
      shares: ["OCsHJEfL-S"],
    },
  ],
};
