import styles from './assignment.module.scss';

const Link = ({ children, ...props }) => (
  <a target="_blank" rel="noreferrer noopener" {...props}>
    {children}
  </a>
);

const Assignment = () => (
  <div className={styles.assignment}>
    <h4>Assignment</h4>

    <p>Create a simple form, using React, asking the following information and restrictions:</p>

    <dl>
      <dt>First name</dt>
      <dd>Must not be empty, leading/trailing space should automatically be removed</dd>

      <dt>Last name</dt>
      <dd>Like first name</dd>

      <dt>Email</dt>
      <dd>Perform basic check on email format</dd>

      <dt>Password</dt>
      <dd>Password should adhere to some quality checks, up to you to decide what they are</dd>

      <dt>Phone number</dt>
      <dd>Should be a valid phone number (in terms of number format)</dd>

      <dt>Date of birth</dt>
      <dd>Minimum age should be 18, max age: whatever makes sense to you</dd>
    </dl>

    <p>
      The form should have a Submit button that, when pressed, validates the form, shows any
      validation errors, and on success, renders a new component with a summary of the information
      rendered in the form:
    </p>

    <ul>
      <li>Full name, as a clickable link to their email</li>
      <li>Phone number as a phone link</li>
      <li>Date of birth with age (in years, with one decimal precision) in parenthesis behind it</li>
    </ul>

    <p>
      Ideally, the app, form and the summary use some nice styling, although we're not expecting a
      masterpiece here. This is about assessing some basic understanding of React, javascript, and
      some logic based on simple specs. Feel free to add extra libraries if you want. Also don't
      hesitate to go search for answers online if you have any doubts. This is not an exam.
    </p>

    <p>
      Bonus points for adding a form field where the user can add a profile picture, that is then
      loaded by the browser (not uploaded anywhere) and displayed in a box with an appropriate size
      for display, and using the correct aspect ratio.
    </p>

    <p>
      More bonus points for anything that you think will help us understand where you excel, but again:
      don't go overboard, this should both be fun and not take away too much of your valuable time.
    </p>

    <p>Some useful resources:</p>

    <ul>
      <li><Link href="https://reactjs.org">Learn React</Link></li>
      <li><Link href="https://developer.mozilla.org/en-US/" title="Mozilla Developer Network">MDN</Link></li>
      <li><Link href="https://google.com">Google</Link>, because why not</li>
    </ul>
  </div>
);

export default Assignment;
