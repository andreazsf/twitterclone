<template>
  <q-page class="relative-position text-white">
    <q-scroll-area class="absolute full-width full-height" dark>
      <!-- <q-icon name="construction" color="primary" size="6rem" class="q-mb-sm" />
    <h2 class="q-mt-none q-mb-sm text-weight-bold">Oops!</h2>
    <h5 class="q-mt-none">Website is under construction.</h5> -->

      <!-- TWEET FORM -->
      <div class="q-pl-lg q-pt-sm q-pb-md text-weight-light">
        <q-input
          dark
          bottom-slots
          autogrow
          borderless
          class="newTweet text-20 q-pb-none text-red"
          placeholder="What is happening?!"
          maxlength="280"
          v-model="newTweet"
          v-on:input="updateCounter"
        >
          <template v-slot:before>
            <q-avatar>
              <img
                src="https://pbs.twimg.com/profile_images/1618674849756618754/mCYlfSTs_400x400.jpg"
              />
            </q-avatar>
          </template>

          <!-- <template v-slot:append>
          <q-icon
            v-if="newTweet !== ''"
            name="close"
            @click="newTweet = ''"
            class="cursor-pointer"
          />
        </template> -->

          <!-- SEND BUTTON -->
          <template v-slot:after>
            <q-btn round dense flat icon="send" class="invisible" />
          </template>
        </q-input>

        <!-- PUBLICITY TOGGLE -->
        <div class="q-px-lg q-mx-xs row" v-if="newTweet !== ''">
          <q-btn
            rounded
            dense
            no-caps
            :ripple="false"
            class="text-primary text-13 text-weight-semibold q-px-md q-py-none"
          >
            <q-icon
              name="public"
              class="cursor-pointer q-pr-xs q-pb-xs"
              size="16px"
            />
            Everyone can reply
          </q-btn>
        </div>
        <div class="q-pa-sm">
          <q-separator inset color="grey-9" class="q-mx-lg" size="1px" />
        </div>
        <!-- NEW TWEET FORM ICONS -->
        <div class="q-px-md q-mx-md q-mt-sm row">
          <div class="col q-gutter-x-xs">
            <q-btn rounded dense no-caps :ripple="false">
              <q-icon
                name="image"
                class="q-pa-xs text-primary material-icons-outlined"
                size="20px"
              />
            </q-btn>
            <q-btn rounded dense no-caps :ripple="false">
              <q-icon
                name="gif_box"
                class="q-pa-xs text-primary material-icons-outlined"
                size="20px"
              />
            </q-btn>
            <q-btn rounded dense no-caps :ripple="false">
              <q-icon
                name="format_list_bulleted"
                class="q-pa-xs text-primary material-icons-outlined"
                size="20px"
              />
            </q-btn>
            <q-btn rounded dense no-caps :ripple="false">
              <q-icon
                name="sentiment_satisfied"
                class="q-pa-xs text-primary material-icons-outlined"
                size="20px"
              />
            </q-btn>
            <q-btn rounded dense no-caps :ripple="false">
              <q-icon
                name="schedule_send"
                class="gt-xs q-pa-xs text-primary material-icons-outlined"
                size="20px"
              />
            </q-btn>
            <q-btn
              rounded
              dense
              no-caps
              :ripple="false"
              disable
              class="no-pointer-events"
            >
              <q-icon
                name="place"
                class="gt-md q-pa-xs text-primary material-icons-outlined"
                size="20px"
              />
            </q-btn>
          </div>

          <!-- ICONS ON RIGHT AND POST BTN -->
          <div
            class="row inline q-gutter-x-md flex items-center justify-end q-pl-xs"
          >
            <q-circular-progress
              :value="newTweet.length"
              :max="280"
              :thickness="0.2"
              size="sm"
              track-color="grey-9"
              color="primary"
              v-if="newTweet !== ''"
            />
            <q-separator
              vertical
              dark
              color="grey-9"
              class="gt-lg q-my-xs"
              v-if="newTweet !== ''"
            />
            <q-btn
              outline
              round
              color="grey-9"
              size="xs"
              v-if="newTweet !== ''"
              class="gt-lg"
            >
              <q-icon
                name="add"
                class="q-pa-xs text-primary material-icons-outlined"
                size="17px"
              />
            </q-btn>
            <q-btn
              @click="addNewTweet"
              :disable="!newTweet"
              unelevated
              rounded
              color="primary"
              label="Post "
              class="text-capitalize text-weight-bolder text-14`"
            />
          </div>
        </div>
      </div>

      <!-- POSTED TWEETS' LIST STARTS HERE -->
      <transition-group
        appear
        enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut"
      >
        <div
          class="tweetContainer text-18 cursor-pointer"
          v-for="tweet in tweets"
          :key="tweet.id"
        >
          <q-separator color="grey-9" />
          <q-list
            @click="checkTweet()"
            dark
            class="q-pr-md q-mr-xs q-mt-sm text-weight-light"
          >
            <q-item>
              <q-item-section avatar top style="right">
                <q-avatar size="md" class="q-ml-sm"
                  ><img
                    src="https://pbs.twimg.com/profile_images/1618674849756618754/mCYlfSTs_400x400.jpg"
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-15">
                  <strong>ndr </strong>
                  <span class="text-grey-7"
                    >@Dengseu
                    <!-- <br class="lt-md q-pt-xs" /> -->
                    &bull; {{ relativeDate(tweet.date) }}</span
                  >
                </q-item-label>
                <q-item-label class="newTweetContent text-15">
                  {{ tweet.content }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <!-- TWEET BUTTONS -->
          <div
            class="row q-ml-xl q-mr-lg q-pl-md q-pb-xs flex justify-between text-grey-7"
          >
            <q-btn rounded dense no-caps :ripple="false">
              <q-icon
                name="chat_bubble_outline"
                class="q-pa-xs material-icons-outlined"
                size="20px"
              />
            </q-btn>
            <q-btn rounded dense no-caps :ripple="false">
              <q-icon
                name="repeat"
                class="q-pa-xs material-icons-outlined"
                size="20px"
              />
            </q-btn>
            <q-btn
              rounded
              dense
              no-caps
              :ripple="false"
              class="grey-8"
              :style="{ color: tweet.liked ? 'red' : '' }"
              @click="toggleLike(tweet.id)"
            >
              <q-icon
                :name="tweet.liked ? 'favorite' : 'favorite_border'"
                class="q-pa-xs material-icons-outlined"
                size="20px"
              />
            </q-btn>
            <q-btn rounded dense no-caps :ripple="false">
              <q-icon
                @click="deleteTweet(tweet.id)"
                name="delete"
                class="q-pa-xs material-icons-outlined"
                size="20px"
              />
            </q-btn>
            <div class="row tweetIconsEnd">
              <q-btn rounded dense no-caps :ripple="false">
                <q-icon
                  name="bookmark_outline"
                  class="q-pa-xs material-icons-outlined"
                  size="20px"
                />
              </q-btn>
              <q-btn
                rounded
                dense
                no-caps
                :ripple="false"
                disabled
                class="no-pointer-events"
              >
                <q-icon
                  name="share"
                  class="q-pa-xs material-icons-outlined"
                  size="20px"
                />
              </q-btn>
            </div>
          </div>
          <!-- <q-separator color="grey-9" /> -->
        </div>
        <q-separator color="grey-9" />
      </transition-group>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { formatDistance } from "date-fns";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  orderBy,
  updateDoc,
} from "firebase/firestore/lite";
import db from "../boot/firebase";

export default {
  name: "PgHome",
  setup() {
    const newTweet = ref("");
    const isClicked = ref(false);
    const tweets = ref([]);

    const toggleInput = () => {
      isClicked.value = !isClicked.value;
    };

    const checkTweet = () => {
      window.location.href = "/";
    };

    const relativeDate = (value) => {
      return formatDistance(value, new Date());
    };

    const addNewTweet = async () => {
      const tweetContent = newTweet.value.trim();
      if (tweetContent !== "") {
        try {
          const tweetRef = await addDoc(collection(db, "tweets"), {
            content: tweetContent,
            date: new Date().toISOString(),
            liked: false, // Initialize liked field to false
          });
          const newTweetData = {
            id: tweetRef.id,
            content: tweetContent,
            date: new Date().toISOString(),
            liked: false, // Initialize liked field in local tweet data
          };
          tweets.value.unshift(newTweetData);
          newTweet.value = ""; // Reset input field
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      }
    };

    const deleteTweet = async (tweetId) => {
      try {
        await deleteDoc(doc(db, "tweets", tweetId));
        tweets.value = tweets.value.filter((tweet) => tweet.id !== tweetId);
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    };

    const toggleLike = async (tweetId) => {
      try {
        const tweetRef = doc(db, "tweets", tweetId);
        const tweetDoc = await getDoc(tweetRef);
        if (tweetDoc.exists()) {
          const currentLikedStatus = tweetDoc.data().liked;
          const updatedLikedStatus = !currentLikedStatus; // Toggle liked status
          // Update liked status in Firestore
          await updateDoc(tweetRef, { liked: updatedLikedStatus });
          // Update liked status in local tweets array
          const updatedTweets = tweets.value.map((tweet) => {
            if (tweet.id === tweetId) {
              return { ...tweet, liked: updatedLikedStatus };
            } else {
              return tweet;
            }
          });
          tweets.value = updatedTweets;
        } else {
          console.error("Tweet document not found");
        }
        await nextTick();
      } catch (error) {
        console.error("Error toggling like: ", error);
      }
    };

    // Fetch tweets from Firestore
    const fetchTweets = async () => {
      const querySnapshot = await getDocs(collection(db, "tweets"));
      const fetchedTweets = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // Sort tweets by date in descending order
      tweets.value = fetchedTweets.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    };

    // Fetch tweets on component mount
    fetchTweets();

    return {
      newTweet,
      isClicked,
      tweets,
      toggleInput,
      checkTweet,
      relativeDate,
      addNewTweet,
      deleteTweet,
      toggleLike,
    };
  },
};
</script>

<style src="../css/app.scss"></style>
