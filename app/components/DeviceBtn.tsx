import * as React from 'react';
import styles from './DeviceBtn.css'

interface Props {
  title: string;
  onPress: any;
}

class DeviceBtn extends React.PureComponent<Props> {

  onclick = () => {
    this.props.onPress()
  }

  render() {
    const { title } = this.props;
    return (
      <div className = {styles.container}
      onClick = {this.onclick}>
        <span className = {styles.title}>{title}</span>
      </div>
    );
  }
}

export default DeviceBtn;
