module.exports = (sequelize, Sequelize) => {
    const intervalTimer = sequelize.define("interval_timers", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        userID: {
			type: Sequelize.INTEGER,
			references: {
				model: 'users', // <<< Note, its table's name, not object name
				key: 'id' // <<< Note, its a column name
			}
        },
        name: {
            type: Sequelize.STRING
        },
        length: {
            type: Sequelize.INTEGER
        },
        intervals: {
            type: Sequelize.INTEGER
        }
    });
  
    return intervalTimer;
  };