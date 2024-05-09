const data = {
  title: "FAQ",
  rows: [
    {
      title: "Can i Apply if i don't have a Laptop?",
      content: `At Codershub UK it is compulsory for all our students to have a laptop as must of our lessons are Online and the Programming Languages and tools that we use in classes 
      are Only accessible on PC.`,
    },
    {
      title: "What if i Already Know how to Program will i have to have classes with the beginners?",
      content:
        "At Codershub Uk All students are given an initial test to determine which level and classes they will be attending",
    },
    {
      title: "What other Languages other than Python, Javascript, HTML, Css, Java and Go does Codershub Uk Teach ",
      content: `At Codershub UK we Primarly Teach Python for Game Development and Scripting, Javascript, HTML, CSS for Web Development and Golang for Backend Development`,
    },
    {
      title: "Do i have to be a Pro Coder to Attend The Weekly Coding Wars",
      content: '<p>At Codershub Uk you do not have to be a Pro to Join our Weekly Coding Wars with other students they are supposed to be fund and open for all students</p>',
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",

  rowContentColor: 'red',
  //arrowColor: "red",

};

const config = {
  animate: true,
  // arrowIcon: "",
  tabFocus: true
};


export { data, config, styles }
