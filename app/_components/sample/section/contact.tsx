import type { NextPage } from "next";
import styles from "./contact.module.scss";

const Contact: NextPage = async () => {
  return (
    <>
      <div id="contact" className={styles.contact}>
        <h2 className={styles.title}>contact</h2>
        <form>
          <label htmlFor="name">名前</label>
          <input id="name" name="name" type="text" />
          <label htmlFor="subject">件名</label>
          <input id="subject" name="subject" type="text" />
          <label htmlFor="message">お問合せ内容</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
