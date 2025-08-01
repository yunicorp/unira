import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [
    {
      id: "1",
      author: {
        username: "lipsinmirrors",
        avatar:
          "https://styles.redditmedia.com/t5_50xgtt/styles/communityIcon_akyq386y6lpb1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=c76ada1ecc713de046b2177a409078be92fa8860",
        isFollowing: true,
      },
      content:
        "Every poke feels like a burn, it's like I don't feel the pain but I can sense it. I'm not hurt or angry, I just feel threatened all the time.",
      timestamp: "2024-04-15T10:30:00Z",
      likes: 1684,
      comments: 42,
      shares: 23,
      hashtags: [
        "midnightthoughts",
        "overflowingemotion",
        "latenightrants",
        "dareldisturbtheuniverse",
      ],
      isLiked: true,
    },
    {
      id: "2",
      author: {
        username: "fatalflow",
        avatar:
          "https://styles.redditmedia.com/t5_5kzsg2/styles/communityIcon_enxbot399r5f1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=05ccf3fce58bea1aad9dcfaf599a8ccc03b7aa3c",
        isFollowing: true,
      },
      content:
        "Do you ever feel the urge to rip your skin from all that thorough shame? I know I do, all the time.",
      timestamp: "2024-04-01T14:20:00Z",
      likes: 184,
      comments: 28,
      shares: 12,
      hashtags: [
        "shame",
        "self-shamingthoughts",
        "overwhelmed",
        "caretorelate",
        "latenightthoughts",
      ],
      isLiked: false,
    },
    {
      id: "3",
      author: {
        username: "Mayank",
        avatar:
          "https://styles.redditmedia.com/t5_24rv69/styles/communityIcon_ec3jyf50mr091.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=200c9791e77d2e7c4e81c8157623ac6c13e704af",
        isFollowing: false,
      },
      content:
        "Check out my vintage cassette collection! Found these gems at a local thrift store. Music from the 80s and 90s hits different on analog.",
      image:
        "https://preview.redd.it/i-just-wanna-buy-jerseys-and-cool-things-with-my-money-why-v0-oichvgrh3zcf1.jpeg?width=1080&crop=smart&auto=webp&s=0650c28040f1c1fe63fc040ce6d70357d683abae",
      timestamp: "2024-03-23T09:15:00Z",
      likes: 342,
      comments: 67,
      shares: 45,
      hashtags: ["vintage", "cassettes", "music", "thrifting", "analog"],
      isLiked: false,
    },
  ],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
