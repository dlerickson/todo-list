import React, {Component} from 'react';

import ListItem from './ListItem';

class FinishedListItems extends Component {
    render() {
        const {finishedListItems, onClick, trashItem} = this.props;

        return (
            <div className="finished-list-items">
                {
                    finishedListItems.map((item) =>
                        <ListItem
                            item={item}
                            isActive={false}
                            key={item}
                            onClick={onClick}
							trashItem={trashItem}
                        />
                    )
                }
            </div>
        );
    }
}

export default FinishedListItems;
