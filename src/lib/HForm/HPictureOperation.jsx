/**
 * 图片操作区域
 */
import React from 'react';
import propTypes from 'prop-types';
import { Button, Popover } from 'antd';

import getPopoverContent from './utils/getPopoverContent.js';
import getPopoverTitle from './utils/getPopoverTitle.js';

import styles from './styles.less';

const ButtonGroup = Button.Group;

export default function HPictureAction (props) {

  const {
    operations,
    rotate,
    zoom,
    onChange,
  } = props;

  const PopoverStyle = { width: 400 };
  const values = { rotate, zoom };

  const operationsEle = operations.map((val, i) => {
    const content = getPopoverContent(val.value, values, onChange);
    const title = getPopoverTitle(val.value);
    if (val.value === 'rotate' || val.value === 'zoom') {
      return (
        <Popover
          key={i}
          content={content}
          overlayStyle={PopoverStyle}
          title={title}
          trigger="click"
        >
          <Button disabled={val.disabled}>{val.label}</Button>
        </Popover>
      )
    }
    return (
      <Button
        key={i}
        onClick={() => val.onClick && val.onClick()}
        disabled={val.disabled}
      >
        {val.label}
      </Button>
    )
  })

  return (
    <div className={styles.operations}>
      <ButtonGroup>{operationsEle}</ButtonGroup>
    </div>
  )
}

HPictureAction.propTypes = {
  /**
   * 图片操作按钮
   * @type {array/boolean}
   */
  operations: propTypes.array,

  /**
   * 图片旋转角度
   * @type {number}
   */
  rotate: propTypes.number,

  /**
   * 图片缩放比例
   * @type {number}
   */
  zoom: propTypes.number,

  /**
   * 图片 onChange 事件
   * @type {func}
   */
  onChange: propTypes.func.isRequired,
}

HPictureAction.defaultProps = {
  operations: [],
  rotate: 0,
  zoom: 100,
}