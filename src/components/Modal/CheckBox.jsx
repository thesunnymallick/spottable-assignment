import Checkbox from 'react-custom-checkbox';
import * as Icon from 'react-icons/fi';
import PropTypes from 'prop-types';

const CheckBox = ({ status, setStatus }) => {
  return (
    <Checkbox
      icon={
        <Icon.FiCheck
          color="#6d00b3"
          size={30}
        />
      }
      name="my-input"
      checked={status}
      onChange={(value, event) => {
        setStatus(value);
        console.log(event);
        return alert(value);
      }}
      borderColor="#6d00b3"
      style={{ cursor: 'pointer' }}
      labelStyle={{ marginLeft: 5, marginBottom: '0.5rem', userSelect: 'none', fontSize: '1.2rem' }}
      size={25}
      label="task complete?"
    />
  );
};
CheckBox.propTypes = {
  status: PropTypes.bool,
  setStatus: PropTypes.func,
};
export default CheckBox;
