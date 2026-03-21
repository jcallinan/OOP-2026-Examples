const MySet = require('../set');

const job1Skills = new MySet();
job1Skills.addAll(['JavaScript', 'Angular', 'Java', 'SQL']);
const job2Skills = new MySet();
job2Skills.addAll(['Python', 'Machine Learning', 'SQL', 'Statistics']);
const jobPostings = [
  { title: 'Software Engineer', skills: job1Skills },
  { title: 'Data Scientist', skills: job2Skills }
];

const candidateSkills = new MySet();
candidateSkills.addAll(['JavaScript', 'Angular', 'TypeScript', 'AWS']);
const candidate = { name: 'Loiane', skills: candidateSkills };

function matchCandidateWithJobs(candidateProfile, postings) {
  const matches = [];
  for (const job of postings) {
    const matchingSkillsSet = candidateProfile.skills.intersection(job.skills);
    if (!matchingSkillsSet.isEmpty()) {
      matches.push({ title: job.title, matchingSkills: matchingSkillsSet.values() });
    }
  }
  return matches;
}

console.log('Matches:', matchCandidateWithJobs(candidate, jobPostings));
