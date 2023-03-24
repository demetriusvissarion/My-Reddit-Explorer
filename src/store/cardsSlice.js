import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRedditPopular = createAsyncThunk(
  "cards/fetchRedditPopular",
  async () => {
    const responseJson = await fetch(
      "https://www.reddit.com/r/popular.json"
    ).then((response) => response.json());

    const elements = responseJson.data.children;
    const cardData = {};
    elements.map((element) => {
      const data = element.data;
      const id = data.id;
      return (cardData[id] = {
        id: id,
        display: true,
        animation: "display",
        channel: data.subreddit_name_prefixed,
        authorName: data.author,
        title: data.title,
        commentNumber: data.num_comments,
        voteNumber: data.ups,
        contentLink: data.url_overridden_by_dest,
        postHint: data.post_hint,
        isVideo: data.is_video,
        videoLink: data.secure_media,
        permalink: data.permalink,
      });
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
    [fetchRedditPopular.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchRedditPopular.fulfilled]: (state, action) => {
      state.cards = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchRedditPopular.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectAllCards = (state) => state.cards.cards;
export const { setAnimationHide, setDisplayFalse, clearCards } =
  cardsSlice.actions;
