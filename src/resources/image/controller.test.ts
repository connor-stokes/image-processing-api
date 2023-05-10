import { getMockReq, getMockRes } from '@jest-mock/express'
import { uploadImage } from "./controller";
import Jimp from "jimp";

jest.mock('uuid', () => ({ v4: () => '123456789' }));

jest.mock('jimp');

const mockedJimp = Jimp as jest.Mocked<typeof Jimp>;

const mockImageFile = {
    name: 'redbull-f1.jpeg',
    data: Buffer.from('some image data'),
    size: 952270,
    encoding: '7bit',
    tempFilePath: '',
    truncated: false,
    mimetype: 'image/jpeg',
    md5: 'f0b22b55dbcf373240b670461cd96910',
    mv: jest.fn()
}

describe('image controller', () => {
    afterEach(() => {
        jest.clearAllMocks()
    });
    it('should upload an image;', async () => {

        const req = getMockReq({ files: { image: mockImageFile }});
        const { res } = getMockRes()

        mockedJimp.read.mockImplementationOnce(() => {
            return {
                writeAsync: jest.fn()
            }
        });
        await uploadImage(req, res);
        expect(res.json).toBeCalledWith({ image_id: "123456789"} )
    });
});