import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FacebookShareButton, FacebookIcon, TelegramShareButton, TelegramIcon, ViberShareButton, ViberIcon } from 'react-share';
import T from '../../../store/translations';

export default class ShareButtons extends Component {
  static propTypes = {
    vacancy: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      salary_min: PropTypes.number.isRequired,
    })
  }

  state = {
    showShare: false
  }

  get shareUrl() {
    return `https://worker.dp.ua/vacancy/${this.props.vacancy.id}`;
  }

  get title() {
    return `Worker.dp.ua - Трудоустройство за границей | Вакансия - ${this.props.vacancy.title} - ${this.props.vacancy.salary_min} - ${this.props.vacancy.city}`;
  }

  render() {
    return (
      <div>
        <p className="inline-block float-left date-added mt-6 mr-15">{T.translate('vacancy.share')}</p>
        <div className="block-share inline-block text-center align-middle">
          <FacebookShareButton url={this.shareUrl} quote={this.title} className="inline-block text-center mr-6 ml-6" round={true}>
            <FacebookIcon round={true} size={30} />
          </FacebookShareButton>
          <TelegramShareButton url={this.shareUrl} title={this.title} className="inline-block mr-6 ml-6" round={true}>
            <TelegramIcon round={true} size={30} />
          </TelegramShareButton>
          <ViberShareButton url={this.shareUrl} title={this.title} className="inline-block mr-6 ml-6" >
            <ViberIcon round={true} size={30} />
          </ViberShareButton>
        </div>
      </div>
    );
  }
}
