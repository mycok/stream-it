import { chaiWithHttp, expect } from '.';

import { app } from '../src';

describe('test that server works as expected', () => {
  it('should return a success response', async () => {
    const res = await chaiWithHttp.request(app).get('/');

    expect(res.body.success).to.be.equal(true);
  });
});
