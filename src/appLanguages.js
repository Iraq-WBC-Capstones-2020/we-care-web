// import React, { Component } from 'react';
// import LngSupport from './components/Lng/lngSupport';
// import Lng from './components/Lng/Lng.js';
// import LngMenu from './components/menu/menu';

// class appLanguages extends Component {
//   state = {
//     LngDefault: 'en',

//     LngCurrent: 'en',

//     LngMenuShow: true,
//   };

//   lngInit = (AppState) => {
//     if (!AppState.hasOwnProperty('LngMenuOptions')) {
//       const LngOptions = [];

//       for (var key in LngSupport) {
//         LngOptions.push(
//           <option
//             className="LngMenu-lang-option"
//             key={LngSupport[key].id}
//             disabled={LngSupport[key].disabled}
//             hidden={LngSupport[key].hidden}
//             value={key}
//           >
//             {LngSupport[key].name}
//           </option>
//         );
//       }

//       AppState.LngMenuOptions = LngOptions;
//     }
//   };

//   // create/update 'Lng' in state from 'Lng.js'
//   lngLoad = (AppState) => {
//     if (Lng.hasOwnProperty(AppState.LngDefault)) {
//       if (Lng.hasOwnProperty(AppState.LngCurrent)) {
//         AppState.Lng = Object.assign(
//           {},
//           Lng[AppState.LngDefault],
//           Lng[AppState.LngCurrent]
//         );
//       }
//     }
//   };

//   AppSetState = (value) => {
//     this.setState(value);
//   };
//   render() {
//     const AppState = this.state;
//     this.lngInit(AppState);
//     this.lngLoad(AppState);

//     return (
//       <header className="App-header">
//         <LngMenu AppState={AppState} AppSetState={this.AppSetState} />
//         <p>{AppState.Lng.Home}</p>
//         <p> {AppState.Lng.sara}</p>
//       </header>
//     );
//   }
// }
// export default appLanguages;
