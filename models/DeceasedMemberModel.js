import mongoose from 'mongoose';
import { CONTRIBUTION_STATUS } from '../utils/constants.js';

const DeceasedMemberSchema = new mongoose.Schema(
  {
    deceasedAssociationName: String,
    deceasedAssociationCode: String,
    deceasedFirstName: String,
    deceasedLastAndMiddleNames: String,
    deceasedDateOfBirth: Date,
    deceasedCountryOfBirth: String,
    deceasedMemberStatus: String,
    deceasedRegistrationDate: String,
    deceasedDelegateRecommendation: String,
    comment: String,
    placeOfDeath: String,
    deceasedMemberMatriculation: String,
    dateOfDeath: Date,
    contributionStatus: {
      type: String,
      enum: Object.values(CONTRIBUTION_STATUS),
      default: CONTRIBUTION_STATUS.UNDER_REVIEW_PENDING_CONTRIBUTION,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('DeceasedMember', DeceasedMemberSchema);
