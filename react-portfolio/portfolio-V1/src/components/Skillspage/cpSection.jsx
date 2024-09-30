import GitHubCalendar from 'react-github-calendar';
import LeetcodeCalendar from 'leetcode-stats';
import './cpSection.css'

export default function CpSection() {
  return (
    <div className="cpStats">
      <h1><b><>Github</></b></h1>
      <br />
        <GitHubCalendar  username="T-Rahul-prabhu-38" /> 
        <br /><br /><br /><br /><br />
        <h1><b><>LeetCode </></b></h1>
      <br />
        <LeetcodeCalendar username="trahulprabhu38" />
    </div>
  );
}
