import React from 'react';
import PropTypes from 'prop-types';
// import { AddTask } from '../AddTask';

const Header = (props: { darkMode: any; setDarkMode: any; }) => {

    //const {darkMode, setDarkMode} = props;

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="RecipeApp" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              {/* <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
              >
                +
              </button> */}
            </li>
            <li className="settings__darkmode">
              {/* <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
              >
                <FaPizzaSlice />
              </button> */}
            </li>
          </ul>
        </div>
      </nav>

      {/* <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      /> */}
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Header;
