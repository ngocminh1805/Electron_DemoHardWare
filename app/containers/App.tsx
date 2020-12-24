import * as React from 'react';
import DeviceBtn from '../components/DeviceBtn';
import styles from './App.css';

interface Props {}
interface State {
  status: string;
  item: Array<any>;
  height: number;
  width: number;
  isloading: boolean;
  url: string;
}

class App extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      status: '',
      item: [],
      isloading: false,
      height: window.innerHeight,
      width: window.innerWidth,
      url: '',
    };
  }

  updateSize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
  }

  updateInputValue(evt: { target: { value: any } }) {
    this.setState({
      url: evt.target.value,
    });
  }

  callApi = () => {
    console.log('callApi : ', this.state.url);
    fetch(this.state.url, { method: 'GET' })
      // .then((res) => )
      .then((data) => {
        // console.log('Res: ', data?.json());
        data?.json().then((rs1) => {
          console.log('test_rs1: ', rs1);
          this.setState({status: JSON.stringify(rs1) })
        });

        // this.setState({ status: JSON.stringify(data), url: '' });
      })
      .catch((err) => {
        this.setState({ status: 'Không đọc được API' });
        console.log('ERR: ', err);
      });
  };

  Open_Comm = () => {
    console.log('function Open_Comm()');
    this.setState({ status: 'function Open_Comm()' });
  };

  ReaderInit = () => {
    console.log('function ReaderInit()');
    this.setState({ status: 'function ReaderInit()' });
  };

  CardStatus = () => {
    console.log('function CardStatus()');
    this.setState({ status: 'function CardStatus()' });
  };
  EnableCardIn = () => {
    console.log('function  EnableCardIn()');
    this.setState({ status: 'function  EnableCardIn()' });
  };
  MoveCardToICC = () => {
    console.log('function MoveCardToICC()');
    this.setState({ status: 'function MoveCardToICC()' });
  };
  CpuCardReset = () => {
    console.log('function CpuCardReset()');
    this.setState({ status: 'function CpuCardReset()' });
  };
  CpuCardSendApdu = () => {
    console.log('function  CpuCardSendApdu()');
    this.setState({ status: 'function  CpuCardSendApdu()' });
  };
  Poweroff = () => {
    console.log('function  Poweroff()');
    this.setState({ status: 'function  Poweroff()' });
  };
  EjectCard = () => {
    console.log('function EjectCard()');
    this.setState({ status: 'function EjectCard()' });
  };

  /// ----------------------------------

  render() {
    return (
      <div
        className={styles.container}
        style={{ height: window.innerHeight, width: window.innerWidth }}
      >
        <div className={styles.display}>
          <p className={styles.text}>{this.state.status}</p>
        </div>
        <div className={styles.btn_container}>
          <div className={styles.row1}>
            <DeviceBtn title="1.Open the CRT-571R." onPress={this.Open_Comm} />
            <DeviceBtn title="2.Init the CRT-571R." onPress={this.ReaderInit} />
            <DeviceBtn title="3.Card Status." onPress={this.CardStatus} />
          </div>
          <div className={styles.row1}>
            <DeviceBtn title="4. Enable Card In." onPress={this.EnableCardIn} />
            <DeviceBtn
              title="5. Move Card to IC card operation position."
              onPress={this.MoveCardToICC}
            />
            <DeviceBtn
              title="6. Reset The Cpu Card."
              onPress={this.CpuCardReset}
            />
          </div>
          <div className={styles.row1}>
            <DeviceBtn
              title="7.Send APDU Command."
              onPress={this.CpuCardSendApdu}
            />
            <DeviceBtn
              title="8.Power off for CPU Card."
              onPress={this.Poweroff}
            />
            <DeviceBtn title="9.Eject Card." onPress={this.EjectCard} />
          </div>
          <div className={styles.row1}>
            <div className={styles.input_ctn}>
              <input
                className={styles.input}
                placeholder="Nhập URL Api"
                value={this.state.url}
                onChange={(evt) => this.updateInputValue(evt)}
              ></input>
            </div>
            <DeviceBtn title="Call Api" onPress={this.callApi} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
