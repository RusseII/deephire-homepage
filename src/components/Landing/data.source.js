import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: 'https://deephire.s3.amazonaws.com/logos/Horizontal.svg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>Product</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
              href: '',
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: 'https://blog.deephire.com',
          children: [
            {
              children: (
                <span>
                  <p>Blog</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: 'https://recruiter.deephire.com',
          children: [
            {
              children: (
                <span>
                  <p>Login</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: null,
      },
    ],
    subItem: {},
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5 kctityxly1r-editor_css' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <p>
                    <span>Video Interviews</span>
                  </p>
                </span>
              </span>
            </span>
          </span>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <p>
                      <font>
                        <font>
                          <font>
                            <font>
                              Video Interview Software Built For Recruiting.
                            </font>
                          </font>
                        </font>
                      </font>
                    </p>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <p>
                    <font>
                      <font>
                        Conduct live, or automated video interviews.&nbsp;
                      </font>
                    </font>
                  </p>
                </span>
              </span>
            </span>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: 'https://recruiter.deephire.com/user/login?signupEmail=%20',
          className: 'banner5-button',
          type: 'primary',
          children: (
            <span>
              <font>
                <font>Start Free Trial</font>
              </font>
            </span>
          ),
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children:
      'https://deephire.s3.amazonaws.com/logos/Horizontal+White.svg',
    className: 'kctix2q22qe-editor_css',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <span>
          <p>Pre-Recorded Video Interviews</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          The world’s most convenient interviewing option! Pre-recorded
          interviews allow candidates and hiring teams to participate on their
          own time. Make scheduling conflicts and time zone considerations a
          thing of the past while increasing time-to-hire by up to 80%.
        </p>
      </span>
    ),
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:
      'https://deephire.s3.amazonaws.com/logos/Horizontal+White.svg',
    className: 'kctj0jmh4ej-editor_css',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <span>
          <p>Live Video Interviews</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          Effectively pre-screen applicants by connecting with job applicants
          face-to-face, in real-time, even at a distance. Our professional live
          video interviewing software takes video conferencing freebies to the
          next level.
        </p>
      </span>
    ),
  },
};
export const Feature60DataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: {
          className: 'feature6-title-text',
          children: (
            <span>
              <span>
                <p>deephire users experience:</p>
              </span>
            </span>
          ),
        },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit kctk3wja3dt-editor_css',
                children: (
                  <span>
                    <p>%</p>
                  </span>
                ),
              },
              toText: true,
              children: '52',
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <span>
                    <p>decreased time to hire</p>
                  </span>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit kctjzr0p3ul-editor_css',
                children: (
                  <span>
                    <p>%</p>
                  </span>
                ),
              },
              toText: true,
              children: '60',
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <p>recruiter time saved</p>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit kctk0pwgf1p-editor_css',
                children: (
                  <span>
                    <p>%</p>
                  </span>
                ),
              },
              toText: true,
              children: '97',
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <p>candidate satisfaction rate</p>
                </span>
              ),
            },
          },
        ],
      },
    ],
  },
};
export const Feature80DataSource = {
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  page: { className: 'home-page feature8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature8-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature8-title-h1',
        children: (
          <span>
            <span>
              <span>
                <p>How It Works</p>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'feature8-button-wrapper',
    children: [
      {
        name: 'button',
        className: 'feature8-button',
        children: {
          href: 'https://recruiter.deephire.com/user/login?signupEmail=%20',
          children: (
            <span>
              <p>Start Now</p>
            </span>
          ),
        },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: 'feature8-carousel',
    wrapper: { className: 'feature8-block-wrapper' },
    children: {
      className: 'feature8-block',
      titleWrapper: {
        className: 'feature8-carousel-title-wrapper',
        title: { className: 'feature8-carousel-title' },
      },
      children: [
        {
          name: 'block0',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            className: 'feature8-carousel-title-block',
            children: (
              <span>
                <p>One Way Interviews</p>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>Create Job</p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>
                          Specify a list of questions that you want a candidate
                          to answer
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>Invite Candidates</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <span>
                          <p>
                            Invite candidates with one click. They will receive
                            automated follow-ups to ensure a high completion
                            rate.
                          </p>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>View Responses</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>
                          Watch all of the one-way interviews that your
                          candidates have completed
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>Share Candidate</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>
                          Create a public shareable link that you can share with
                          the client or hiring manager.
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'block1',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            children: (
              <span>
                <span>
                  <p>Live Interviews</p>
                  <p>
                    <br />
                  </p>
                </span>
              </span>
            ),
            className: 'feature8-carousel-title-block',
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>Create Interview</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>
                          Schedule an interview between you and the candidate,
                          or schedule a send out interview between the candidate
                          and a client.
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>Conduct Interview</p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>
                          Join the interview with one click, no app download
                          required. View the candidates resume &amp; take notes
                          inside the interview.
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <p>Bookmark Interview</p>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>
                              Set bookmarks, add relevant documents and notes
                              about the interview.
                            </p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <p>Share Interview</p>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>
                              Share with the hiring manager. They are able to
                              see the video, resume, bookmarks,&nbsp; and any
                              documents all iin one place.&nbsp;
                            </p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://deephire.s3.amazonaws.com/logos/Horizontal+White.svg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <p>
                    Premium video interview provider. We look forward to working
                    with you!
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Company</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <p>Login</p>
                </span>
              ),
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>Blog</p>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <p>Demo</p>
                </span>
              ),
            },
            {
              name: 'link3',
              href: '#',
              children: (
                <span>
                  <p>Podcast</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Support</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: 'https://blog.deephire.com/privacy/',
              name: 'link0',
              children: (
                <span>
                  <p>Privacy Policy</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>Support Centre</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Follow Us</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>Linkedin</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>Facebook</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 by <a href="https://deephire.com">DeepHire</a>&nbsp;All Rights
        Reserved
      </span>
    ),
  },
};
