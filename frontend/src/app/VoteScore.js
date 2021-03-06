/**
 * © 2017 Michal Rohac, All Rights Reserved.
 */
import React, {Component} from 'react';
import {Voter} from './'

class VoteScore extends Component {
    render() {
        const {voteScore, upVote, downVote} = this.props;
        return (
            <div className="inline-block">
                <span className="badge">{voteScore > 0 ? '+' : ''}{voteScore}</span>
                <span className={`glyphicon ${voteScore >= 0 ? 'glyphicon-thumbs-up' : 'glyphicon-thumbs-down'}`}
                      style={{marginLeft: 5, marginRight: 5}}></span>
                {upVote && downVote && (
                    <Voter upVote={upVote} downVote={downVote}/>
                )}
            </div>
        )
    }
}

export default VoteScore