module.exports = (sequelize, Sequelize) => {
    const intervalTimer = sequelize.define("interval_timers", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
			type: Sequelize.STRING,
			references: {
				model: 'users', // <<< Note, its table's name, not object name
				key: 'id' // <<< Note, its a column name
			}
        },
        completed: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
        exercises: {
            type: Sequelize.TEXT,
            // use JSON.parse to convert string into object
        }
    });
  
    return intervalTimer;
  };