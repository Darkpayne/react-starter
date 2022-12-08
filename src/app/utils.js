import { sub, parseISO, formatDistanceToNow } from "date-fns";
import { useDispatch } from "react-redux";

// FORMATS AND DIGITAL VALUE TO A CURRENCY FORMAT
export const formatCurrency = function (amount) {
  return (
    "₦" +
    parseFloat(amount)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
  );
};

// A USEFUL CODE TO DISABLE THE SAVE BUTTON
export const canSave = Boolean(title) && Boolean(username) && Boolean(book);
//example {/* <button disabled={!canSave}></button> */}
// this is a useful method to disable a form button if input fields are empty.

// A USER FRIENDLY FORMAT OF DISPLAYING TIMESTAMPS AND DATES
export const date = sub(new Date(), { minutes: 10 }).toISOString();
// the sub function  subtract 10minutes from the recent time.

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timeperiod = formatDistanceToNow(date);
    timeAgo = `${timeperiod} ago`;

    return (
      <span title={timestamp}>
        <i>{timeAgo}</i>
      </span>
    );
  }
};
// TimeAgo is a user friendly way to read the dates.

// USEFUL FORMAT OF DISPLAYING DATA ACCORDING TO DATES.
export const Order = data.slice().sort((a, b) => b.date.localeCompare(a.date));
// To display data in the order of recently posted.

// PIECE OF CODE TO INTEGRATE REACTIONS IN POST OR PRODUCTS
const reaction = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  clap: "👏",
};
// these are reaction you find on a post or product. and we are using these values.

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactions = Object.entries(reaction).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reaction[name]}
      </button>
    );
  });
  //   using Object.entries to have access to the object key and value while mapping the array of the reactionEmoji
  return <div>{reactions}</div>;
};
