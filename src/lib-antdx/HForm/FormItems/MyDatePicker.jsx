/**
 * 日期选择框
 */
import React from 'react';
import propTypes from 'prop-types';
import { DatePicker } from 'antd';

const MyDatePicker = (props) => {
  const {
    api,
    onChange,
    value,
  } = props;

  const newProps = {
    ...api,
    onChange,
    value,
  };

  return <DatePicker {...newProps} />;
}

MyDatePicker.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func,
  value: propTypes.object,
}

MyDatePicker.defaultProps = {
  api: {},
  onChange: () => {},
  value: undefined,
}

export default MyDatePicker;