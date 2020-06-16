import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS(
    {
        title: '',
        content: ''
        // content: '<img src="https://www.shanewen.me/images/bannerbg.png" alt=""/>' +
        //     '<p><b>Baptists form a major branch of Protestantism distinguished by baptizing professing believers only</b> (believer\'s baptism, as opposed to infant baptism), and doing so by complete immersion (as opposed to affusion or aspersion).' +
        //     'Baptist churches also generally subscribe to the doctrines of soul competency (the responsibility and accountability of every person before God), sola fide (salvation by faith alone), sola scriptura (scripture alone as the rule' +
        //     'of faith and practice) and congregationalist church government. Baptists generally recognize two ordinances: baptism and communion.</p>' +
        //     '<p>Diverse from their beginning, those identifying as Baptists today differ widely from one another in what they believe, how they worship, their attitudes toward other Christians, and their understanding of what is important in Christian discipleship.[1]</p>' +
        //     '<p>Historians trace the earliest "Baptist" church to 1609 in Amsterdam, Dutch Republic with English Separatist John Smyth as its pastor.[2] In accordance with his reading of the New Testament, he rejected baptism of infants and instituted baptism only of believing adults.[3]' +
        //     'Baptist practice spread to England, where the General Baptists considered Christ\'s atonement to extend to all people, while the Particular Baptists believed that it extended only to the elect.[4] Thomas Helwys formulated a distinctively Baptist request that the church and ' +
        //     'the state be kept separate in matters of law, so that individuals might have freedom of religion. Helwys died in prison as a consequence of the religious conflict with English dissenters under King James I. In 1638, Roger Williams established the first Baptist congregation ' +
        //     'in the North American colonies. In the 18th and 19th centuries, the First and Second Great Awakening increased church membership in the United States.[5] Baptist missionaries have spread their faith to every continent.[3]</p>'

    }
);
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INITIAL_DETAILS_DATA:
            return state.set('title', action.title).set('content', action.content);
    }
    return state;
}