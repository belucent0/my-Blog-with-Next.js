import { getApiDocs } from "../../../utils/swagger";
import ReactSwagger from "./react-swagger";

//Swagger - api-docs
export default async function IndexPage(): Promise<JSX.Element> {
    try {
        const spec = await getApiDocs();
        return (
            <section className="container mx-auto min-h-screen px-3 py-3 md:px-24">
                <ReactSwagger spec={spec} />
            </section>
        );
    } catch (error) {
        console.error("Error while fetching API docs:", error);
        return <div>API 문서를 가져오는데 에러가 발생하였습니다. 잠시 후 다시 시도해주세요.</div>;
    }
}

/** 방명록 등록 api
 * @swagger
 * /api/guestbook/new:
 *  post:
 *    summary: "방명록 등록"
 *    description: "로그인한 사용자만 방명록을 작성할 수 있습니다. 요청시 credentails를 전송하진 않지만, 쿠키에 session-token이 저장되어있어야합니다."
 *    tags: [Guestbook]
 *    security:
 *      - next-auth.session-token: []
 *    requestBody:
 *      description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다.(방명록 등록)
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              authorName:
 *                type: string
 *                description: "유저 이름"
 *              content:
 *                type: string
 *                description: "방명록 내용"
 *            example:
 *              authorName: "작성자 이름"
 *              content: "방명록 내용"
 *    responses:
 *      "200":
 *        description: 방명록 등록 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      content:
 *                        type: string
 *                      authorName:
 *                        type: string
 *              example:
 *                status: "success"
 *                message: "방명록 등록 성공"
 *      "400":
 *        description: 방명록 내용이 없을 때
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      content:
 *                        type: string
 *                      authorName:
 *                        type: string
 *              example:
 *                status: "fail"
 *                message: "방명록 내용이 없습니다."
 *      "401":
 *        description: 로그인 없이 방명록 등록 시도
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      content:
 *                        type: string
 *                      authorName:
 *                        type: string
 *              example:
 *                status: "fail"
 *                message: "로그인 정보가 없습니다."
 *      "500":
 *        description: 방명록 등록 중 서버에러
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      content:
 *                        type: string
 *                      authorName:
 *                        type: string
 *              example:
 *                status: "error"
 *                message: "방명록 등록 중 서버에러"
 */

/** 방명록 삭제 api
 * @swagger
 * /api/guestbook/delete:
 *   delete:
 *     summary: "방명록 삭제"
 *     description: "로그인한 사용자만 방명록을 작성할 수 있습니다. 요청시 credentails를 전송하진 않지만, 쿠키에 session-token이 저장되어있어야합니다."
 *     tags: [Guestbook]
 *     security:
 *      - next-auth.session-token: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *             example:
 *              id: "60f3e3e3e3e3e3e3e3e3e3e1"
 *
 *     responses:
 *       "200":
 *         description: 게시글 삭제 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: string
 *                 message:
 *                   type: string
 *                   example: "게시글 삭제 성공"
 *               example:
 *                status: "success"
 *                message: "게시글 삭제 성공"
 *       "403":
 *         description: 자신의 글만 삭제
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: string
 *                 message:
 *                   type: string
 *               example:
 *                status: "fail"
 *                message: "자신의 글만 삭제할 수 있습니다."
 *       "500":
 *         description: 서버 오류
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *               example:
 *                status: "error"
 *                message: "게시글 삭제 실패"
 *
 *
 */

/** 로그인 api
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: "로그인"
 *     description: "로그인을 위한 api입니다."
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: "로그인용 이메일"
 *               password:
 *                 type: string
 *                 description: "로그인요 비밀번호"
 *             example:
 *               email: "test123@vividnow.com"
 *               password: "qweqwe123!"
 *     responses:
 *       "200":
 *         description: 성공적인 로그인 처리
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *             example:
 *               status: "success"
 *               message: "로그인 성공"
 *       "401":
 *         description: 사용자가 서버로 잘못된 이메일 혹은 비밀번호를 전달합니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *             example:
 *               status: "fail"
 *               message: "이메일 또는 비밀번호가 일치하지 않습니다."
 *       "500":
 *         description: 사용자 요청처리 중 서버에러 발생
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                   example: "서버 오류"
 *             example:
 *               status: "error"
 *               message: "로그인 서버에서 에러가 발생했습니다."
 */

/** 비밀번호 확인 api
 * @swagger
 * /api/auth/password:
 *   post:
 *    summary: "계정삭제를 위한 비밀번호 확인"
 *    description: "로그인한 사용자만 비밀번호 확인 가능합니다. 요청시 credentails를 전송하진 않지만, 쿠키에 session-token이 저장되어있어야합니다."
 *    tags: [Auth]
 *    security:
 *      - next-auth.session-token: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              password:
 *                type: string
 *                description: "로그인 비밀번호"
 *            example:
 *             password: "qwer1234!"
 *    responses:
 *      "200":
 *        description: 성공적으로 비밀번호가 확인되었습니다.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *              example:
 *                status: "success"
 *                message: "비밀번호가 확인되었습니다."
 *      "401":
 *        description: 사용자가 서버로 잘못된 비밀번호를 전달합니다.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *              example:
 *               status: "fail"
 *               message: "비밀번호가 일치하지 않습니다."
 *      "403":
 *        description: 삭제 계정의 권한을 확인합니다.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *              example:
 *               status: "fail"
 *               message: "삭제할 수 없는 계정입니다."
 *      "500":
 *        description: 사용자 요청처리 중 서버에러 발생
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *                  example: "서버 오류"
 *              example:
 *               status: "error"
 *               message: "계정 삭제 중 서버에러 발생"
 */

/** 회원탈퇴 api
 * @swagger
 * /api/auth/withdrawal:
 *   delete:
 *    summary: "회원탈퇴"
 *    description: "로그인한 사용자만 회원탈퇴할 수 있습니다. 요청시 credentails를 전송하진 않지만, 쿠키에 session-token이 저장되어있어야합니다."
 *    tags: [Auth]
 *    security:
 *      - next-auth.session-token: []
 *    requestBody:
 *      required: false
 *    responses:
 *      "200":
 *        description: 성공적인 회원탈퇴가 완료되었습니다.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *              example:
 *               status: "success"
 *               message: "회원탈퇴가 완료되었습니다."
 *      "400":
 *        description: 로그인 정보에 이메일이 없는 경우
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *              example:
 *               status: "fail"
 *               message: "정상적인 요청이 아닙니다."
 *      "403":
 *        description: 권한이 없는 계정의 삭제를 시도하는 경우
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *              example:
 *               status: "fail"
 *               message: "삭제할 수 없는 계정입니다."
 *      "500":
 *        description: 요청 처리중 에러 발생
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *              example:
 *               status: "fail"
 *               message: "계정 삭제 중 서버에러 발생"
 */
