import * as React from 'react';
import CBPaneView from './paneview';
import CBDockView from './dockview';

export const App: React.FC = (props: { theme?: string }) => {
    return (
        <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
            <div style={{ width: '60%' }}>
                <CBDockView theme={props.theme} />
            </div>
            <div style={{ width: '40%' }}>
                <CBPaneView theme={props.theme} />
            </div>
        </div>
    );
};

export default App;