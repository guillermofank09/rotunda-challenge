import inquirer from 'inquirer'

// List of questions use to get animal and text inputs.
const askZooQuestions = () => {
    const questions = [
        {
          name: 'animal',
          type: 'rawlist',
          choices: [
              'Lyon',
              'Tiger',
          ],
          message: 'Select an animal: ',
          validate: function( value ) {
            if (value.length) {
              return true;
            } else {
              return "Please select a valid option";
            }
          }
        },
        {
            name: 'text',
            type: 'input',
            message: 'Type something for animal speaking',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return "You need to type something";
              }
            }
          },
      ];
      return inquirer.prompt(questions);

}

export default askZooQuestions;