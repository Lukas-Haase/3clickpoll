# 3ClickPoll

## Vision

The »3ClickPoll« feature for frag.jetzt is a powerful tool that will bring a new level of collaboration and engagement to the learning experience for both instructors and participants.

## Objective

The »3ClickPoll« feature will revolutionize the way instructors interact with their students in large courses by allowing instructors to create customizable polls and surveys that can be sent to all course participants in real-time. Participants will then be able to quickly and easily provide feedback and understanding, allowing instructors to gather valuable insights and data that can inform their teaching approaches and enhance the learning experience.

## Scope

The »3ClickPoll« feature will be accessible within the frag.jetzt Progressive Web App (PWA). Participants will be informed of running polls through multiple channels, including pop-ups within the frag.jetzt room, web push notifications in the browser, and push notifications on their phones if they have frag.jetzt installed. The »3ClickPoll« feature will also allow participants to have a more active role in their own learning, as they will have the opportunity to contribute to the course discussion in real-time.

## Benefits

- The »3ClickPoll« feature is easy to use, with just a few clicks required to create and participate in polls. This saves time for instructors and makes it easy for participants to provide feedback and understanding.
- The »3ClickPoll« feature allows instructors to gather valuable insights and data that can inform their teaching approaches and enhance the learning experience. This helps instructors to better understand their students and tailor their teaching to meet their needs.
- The »3ClickPoll« feature allows participants to have a more active role in their own learning, as they will have the opportunity to contribute to the course discussion in real-time. This encourages participation and engagement in the learning process.
- As a PWA, frag.jetzt can be accessed from any device with a web browser, making it easy for instructors and participants to use the app from anywhere, at any time. This increases flexibility and accessibility for both instructors and participants.

## Conclusion

The »3ClickPoll« feature is a must-have addition for any instructor who is looking to create a dynamic and interactive learning environment for their students.

# User Stories

## User story \#1: Integration of live polling feature in frag.jetzt

As a room creator or a moderator, I can access the Live Polling feature on any page of the room from the navigation menu. I can disable the feature in the room settings.

### Acceptance criteria

- When booking a room, I am first directed to the room settings. There, analogous to the already available features "Enable Bonus archive", "Enable Quiz rally" and "Enable brainstorming", I can activate or deactivate the new feature. Initially, "Enable Live polling" is activated.
- As the room creator or as a moderator can easily access the live polling mode from the navigation menu on any page of the room.

## User story \#2: Creating a poll

As an instructor or moderator, I want to be able to create a poll in two clicks by clicking the "Live Poll" button and selecting a poll template, so that I can quickly and easily gather feedback and understanding from my students.

### Acceptance criteria

- The instructor or moderator can click the "Live Poll" button to start creating a poll.
- The instructor or moderator can select a poll template from the available options (ABCD or emoji response).
- The instructor or moderator can write a question text for the poll, but is not required to.

## User story \#3: Sending a notification to participants

As an instructor or moderator, I want to be able to send a real-time notification about the survey to all participants, so that they are aware of the poll and can provide their feedback and understanding.

### Acceptance criteria

- When the instructor or moderator clicks the "Start" button, a notification is sent to all participants.
- The notification is sent in the following ways:
  - As a pop-up if the participant is in the frag.jetzt room.
  - As a web push notification if the participant is browsing in another tab in the browser.
  - As a push notification to the participant's phone if they have frag.jetzt installed.

## User story \#4: Participating in a poll

As a participant, I want to be able to see the question text and the voting template, and provide my response, so that I can contribute to the course discussion and provide my feedback and understanding.

### Acceptance criteria

- When a participant receives a notification about a poll, they are able to see the question text and the voting template.
- The participant can provide their response by selecting one of the available options (ABCD or emoji).
- Once the participant has voted, they are able to see real-time response statistics if enabled by the instructor or moderator.
- The number of online users and the number of responses are dynamically displayed below the statistics.

## User story \#5: Running multiple polls

As an instructor or moderator, I want to be able to run as many polls in my room as I want, and have the results saved with the date and time, so that I can gather multiple rounds of feedback and understanding from my students.

### Acceptance criteria

- The instructor or moderator can run as many polls in their room as they want.
- The results of each poll are saved with the date and time.

## User story \#6: Comparing poll results

As an instructor or moderator, I want to be able to select two surveys from the list of all surveys and see both response statistics displayed together in one chart, so that I can compare the results and gain insight into changes over time.

### Acceptance criteria

- The instructor or moderator can select two surveys from the list of all surveys.
- The last two surveys are preselected by default.
- Both response statistics are displayed together in one chart, allowing the instructor or moderator to easily compare the results.

## User story \#7: Viewing poll results

As an instructor or moderator, I want to be able to view the results of a poll, including the responses of each participant, so that I can gain valuable insights and data that inform my teaching approaches and enhance the learning experience.

### Acceptance criteria

- The instructor or moderator can view the results of a poll by selecting it from the list of all surveys.
- The results include the responses of each participant, as well as the real-time response statistics.
- The results are displayed in a clear and organized manner, allowing the instructor or moderator to easily understand and analyze the data.

## User story \#8: Customizing poll templates

As an instructor or moderator, I want to be able to customize the poll templates by adding or removing response options, so that I can create polls that are tailored to the specific needs and goals of my course.

### Acceptance criteria

- The instructor or moderator can access the poll template customization menu from the poll creation page.
- The instructor or moderator can add or remove response options from the ABCD and emoji templates.
- The instructor or moderator can save their custom templates for future use.

## User story \#9: Saving poll results

As an instructor or moderator, I want to be able to save the results of a poll, so that I can access and refer to them at a later date.

### Acceptance criteria

- The instructor or moderator can save the results of a poll by clicking a designated button or using a designated keyboard shortcut.
- The saved results include the responses of each participant, as well as the real-time response statistics.
- The saved results can be accessed and viewed at a later date by the instructor or moderator.

## User story \#10: Returning to the Q&A forum

As a participant, I want to be able to return to the Q&A forum after a poll has ended, so that I can continue participating in the course discussion.

### Acceptance criteria

- When the instructor or moderator ends the current survey, all participants are returned to the Q&A forum.



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.thm.de/arsnova/3clickpoll.git
git branch -M master
git push -uf origin master
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.thm.de/arsnova/3clickpoll/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
