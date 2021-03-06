var mongoose = require ('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;


const productSchema = new Schema (
  {
    questions: [
      {
        question_id: ObjectId,
        _id: false,
        question_body: String,
        question_date: {
          type: Date,
          default: Date.now,
        },
        asker_name: String,
        question_helpfulness: {
          type: Number,
          default: 0,
        },
        reported: {
          type: Number,
          default: 0,
        },
        answers: [
          {
            id: ObjectId,
            _id: false,
            body: String,
            date: {
              type: Date,
              default: Date.now,
            },
            answerer_name: String,
            helpfulness: {
              type: Number,
              default: 0,
            },
            reported: {
              type: Number,
              default: 0,
            },
            photos: [
              {
                _id: false,
                url: String,
              },
            ],
          },
        ],
      },
    ],
  },
);

// productSchema.pre('findOne', function() {
//   this._startTime = Date.now();
// });

// productSchema.post('findOne', function() {
//   if (this._startTime != null) {
//     console.log('Runtime in MS: ', Date.now() - this._startTime);
//   }
// });

module.exports = mongoose.model('Product', productSchema);
