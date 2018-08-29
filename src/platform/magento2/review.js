import AbstractReviewProxy from '../abstract/user'
import { multiStoreConfig } from './util'
const Magento2Client = require('magento2-rest-client').Magento2Client;

class ReviewProxy extends AbstractReviewProxy {
  constructor (config, req){
    super(config, req)
    this.api = Magento2Client(multiStoreConfig(config.magento2.api, req));
  }

  create (reviewData) {
    return this.api.reviews.create(reviewData)
  }
}

module.exports = ReviewProxy