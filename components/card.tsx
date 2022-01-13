import { format } from "fecha";
import Image from "next/image";
import { useState } from "react";

import styles from "../styles/Home.module.css";
import Heart from "./heat";

const Card = ({ post }: any) => {
  let date = new Date(post.date + "T01:00:00.000");

  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <a href={`${post.url}`} target="_blank" rel="noreferrer">
          {post.media_type === "video" ? (
            <Image
              src={`${post.thumbnail_url}`}
              alt={`${post.title}`}
              layout="fill"
              objectFit="contain"
            />
          ) : (
            <Image
              src={`${post.url}`}
              alt={`${post.title}`}
              layout="fill"
              objectFit="cover"
            />
          )}
        </a>
      </div>
      <h2>{post.title}</h2>
      <h3>{format(date, "MMMM Do, YYYY")}</h3>
      <p>{post.explanation}</p>
      <div onClick={() => setLiked(!liked)}>
        <Heart liked={liked} />
      </div>
    </div>
  );
};

export default Card;
