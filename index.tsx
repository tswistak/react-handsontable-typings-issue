import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HotTable } from '@handsontable/react';

class HotApp extends React.Component {
    private readonly data = [
        ["", "Ford", "Volvo", "Toyota", "Honda"],
        ["2016", 10, 11, 12, 13],
        ["2017", 20, 11, 14, 13],
        ["2018", 30, 15, 12, 13]
    ];

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="hot-app">
                <HotTable data={this.data} colHeaders={true} rowHeaders={true} width={600} height={300} stretchH="all" />
            </div>
        );
    }
}

(() => {
    ReactDOM.render(<HotApp />, document.getElementById('target'));
})();