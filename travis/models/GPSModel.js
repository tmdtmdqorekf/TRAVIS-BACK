const mongoose = require('mongoose');

const GPSSchema = new mongoose.Schema({
  //userModel 참조
  email: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required: [true, 'User id is required'],
  },
  records: [
    {
      recordId: { type: String, required: [true, 'Record id is required'], unique: true },
      date: { type: String, required: [true, 'Record date is required'] }, //측정일
      text: { type: String, required: false }, //메모 (선택적)
      duration: { type: String, required: [true, 'Total Duration time is required'] }, //총 이동시간 (stop 시에 측정됨)
      distance: { type: String, required: [true, 'Total Distance is required'] }, //총 이동거리 (stop 시에 측정됨)
      GPS: [
        {
          longitude: { type: Number, required: [true, 'Longitude is required'] },
          latitude: { type: Number, required: [true, 'Latitude is required'] },
          height: { type: Number, required: [true, 'Height is required'] },
          time: { type: Number, required: [true, 'Measured time is required'] }, //측정된 시간
        },
      ],
    },
  ],
});

const GPSModel = mongoose.model('GPS', GPSSchema);
module.exports = GPSModel;
