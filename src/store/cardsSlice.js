import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRedditData = createAsyncThunk(
  "cards/fetchRedditPopular",
  async (channel = "home", thunkAPI) => {
    const responseJson = await fetch(
      `https://www.reddit.com/r/${channel}.json`
    ).then((response) => response.json());

    const elements = responseJson.data.children;
    const cardData = {};
    elements.forEach((element) => {
      const data = element.data;
      const id = data.id;
      cardData[id] = {
        id: id,
        display: true,
        animation: "display",
        channel: data.subreddit_name_prefixed,
        authorName: data.author,
        title:
          data.title.length < 80
            ? data.title
            : data.title.slice(0, 80) + " ...",
        commentNumber: data.num_comments,
        voteNumber: data.ups,
        contentLink: data.url_overridden_by_dest,
        postHint: data.post_hint,
        isVideo: data.is_video,
        videoLink: data.secure_media,
        permalink: data.permalink,
        text: data.selftext,
        thumbnail: data.thumbnail,
      };
    });
    return cardData;
  }
);

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {},
    isLoading: false,
    hasError: false,
  },
  reducers: {
    setDisplayFalse: (state, action) => {
      state.cards[action.payload].display = false;
    },
    setAnimationHide: (state, action) => {
      state.cards[action.payload].animation = "hide";
    },
    clearCards: (state, action) => {
      state.cards = {};
    },
  },
  extraReducers: {
    [fetchRedditData.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchRedditData.fulfilled]: (state, action) => {
      state.cards = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
  },
});

export const selectAllCards = (state) => state.cards.cards;
export const {
  setAnimationHide,
  setDisplayFalse,
  setTextDisplay,
  setDisplayCardsId,
  clearCards,
} = cardsSlice.actions;
