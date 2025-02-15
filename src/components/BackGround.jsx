import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'antd/lib/collapse';

import Icon from './common/Icon';
import Color from './common/Color';

import Image from './common/BackGroundImage';

const Panel = Collapse.Panel;

class EditorBg extends Component {
  static propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.object,
    locale: PropTypes.object,
    editorElem: PropTypes.any,
  };

  static defaultProps = {
    className: 'editor-bg',
    value: {
      color: null,
      image: {
        url: [''],
        repeat: ['repeat'],
        position: ['center'],
        size: ['contain'],
        attachment: ['scroll'],
      }
    },
    onChange: () => { },
  };

  onChange = (key, v) => {
    const value = {
      ...this.props.value,
      [key]: v,
    };
    this.props.onChange('background', value);
  }

  render() {
    const { value, locale, onChange, editorElem, ...props } = this.props;
    return (<Panel {...props} header={props.header || locale.header}>
      <Color
        onChange={(e) => {
          this.onChange('color', e);
        }}
        title={<Icon type="bg-colors" prompt={locale.color}/>}
        color={value.color}
      />
      <Image 
        onChange={(e) => {
          this.onChange('image', e);
        }}
        locale={locale}
        value={value.image}
        editorElem={editorElem}
      />
    </Panel>);
  }
}

EditorBg.componentName = 'EditorBackGround';

export default EditorBg;
