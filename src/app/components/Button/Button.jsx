import PropTypes from 'prop-types';
import classes from './Button.module.css';

function Button({ children }) {
  <div class="spinner-border" role="status">
  
  <span class="visually-hidden">Loading...</span>
 
  </div>

  return <button className={classes.button}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
