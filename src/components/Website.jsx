import React from 'react'
import { connect } from 'react-redux'

import Startup0 from '../../static/theme/assets/img/startup-0.svg'
import Startup1 from '../../static/theme/assets/img/startup-1.jpg'
import Startup2 from '../../static/theme/assets/img/startup-2.jpg'
import Startup3 from '../../static/theme/assets/img/startup-3.jpg'
import Startup4 from '../../static/theme/assets/img/startup-4.svg'
import Startup5 from '../../static/theme/assets/img/startup-5.svg'
import Startup6 from '../../static/theme/assets/img/startup-6.svg'
import Startup7 from '../../static/theme/assets/img/startup-7.svg'
import Startup8 from '../../static/theme/assets/img/startup-8.svg'
import Startup9 from '../../static/theme/assets/img/startup-9.svg'
import Startup10 from '../../static/theme/assets/img/startup-10.svg'
import Startup11 from '../../static/theme/assets/img/startup-11.svg'
import Startup12 from '../../static/theme/assets/img/startup-12.svg'
import Startup13 from '../../static/theme/assets/img/startup-13.svg'
import Startup14 from '../../static/theme/assets/img/startup-14.svg'
import Startup15 from '../../static/theme/assets/img/startup-15.svg'
import Startup16 from '../../static/theme/assets/img/startup-16.svg'
import Startup17 from '../../static/theme/assets/img/startup-17.svg'

export const Website = ({ store }) => {
  var state = store.getState()
  var lastState = state ? state.last() : undefined
  var info = lastState ? lastState.info : undefined

  return (
    <div>
      <div className="bte btf hidden" id="sidebar">
        <ul className="nav bqr nav-stacked zj">
          <li className="baj">Examples</li>
          <li className="m">
            <a className="sb active" href="index.html">Startup</a>
          </li>
          <li className="m">
            <a className="sb" href="minimal/index.html">Minimal</a>
          </li>
          <li className="m">
            <a className="sb" href="bold/index.html">Bold</a>
          </li>
          <li className="nav-divider"></li>
          <li className="baj">Docs</li>
          <li className="m">
            <a className="sb" href="docs/index.html">Toolkit</a>
          </li>
          <li className="m">
            <a className="sb" href="http://getbootstrap.com">Bootstrap</a>
          </li>
        </ul>
      </div>

      <div className="btd" id="stage">

        <div className="k am brj bti" style={{ backgroundImage: 'url(' + Startup1 + ')' }}>

          <div className="e ajl afy app-navbar">
            <nav className="du brz bap sp">
              <button className="sj sm azl" type="button" data-target="#stage" data-toggle="stage" data-distance="-250">
                <span className="sk"></span>
              </button>

              <a className="l ajv" href="">
                <strong style={{ background: '#fff', padding: '12px', borderRadius: '4px', color: '#28669F' }}>go</strong>
              </a>

              <div className="azk ayt">
                <ul className="navbar-nav">
                  <li className="m aip ">
                    <a className="sb" href="#">StartUp</a>
                  </li>
                  <li className="m aip ">
                    <a className="sb" href="#">Minimal</a>
                  </li>
                  <li className="m aip ">
                    <a className="sb" href="#">Bold</a>
                  </li>
                  <li className="m aip ">
                    <a className="sb" href="#">Docs</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>


          <img className="z" src={ Startup0 } />

          <div className="brp ajp">
            <div className="e">
              <div className="c">
                <div className="fv gr">
                  <h1 className="btj btk">Analytics on demand.</h1>
                  <p className="al ahs an">Stop installing bloated scripts that all track the exact same things. Install one that does everything.</p>
                  <button className="dm qq ap">Try it now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="k block-secondary aa">
          <div className="e">
            <div className="c aq">

              <div className="fq azk">
                <img className="btl" src={ Startup2 } style={{ width: '100%' }} />
              </div>

              <div className="ge lo fx ka">
                <h6 className="an ayt">Rich Information</h6>
                <h3>Make informed decisions with historical &amp; real time data.</h3>
                <p className="al ahs">We combine immediate real time events with rich historical data to help answer the toughest questions about retention, growth, and engagement.</p>
                <div className="c azm">
                  <div className="fr ahl">
                    <h5>Data frequency</h5>
                    <p>We poll for data on a millisecond basis. You can react to new information in seconds rather than days. <a href="#" className="ayz">Learn more.</a>
                    </p>
                  </div>
                  <div className="fr">
                    <h5>Reliability &amp; uptime</h5>
                    <p>We process our data across a massively distributed network of reliable servers to ensure 99.99% uptime, always. <a href="#" className="ayz">Learn more</a>.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="k am block-secondary ab">
          <div className="e">
            <div className="c aq">
              <div className="gd lh">

              </div>

              <div className="ge ks">
                <h6 className="an ayt">Easy development</h6>
                <h3>Natural language queries make mining data easy for anyone.</h3>
                <p className="al ahs an">Rather than force everyone at your company to learn incredibly difficult terminal commands, we allow anyone to query the data with natural language to return data.</p>
                <button className="dm qs ap bac">
                  Read our docs
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="k am ad" style={{ backgroundImage: 'url('+ Startup3 + ')' }}>
          <div className="e">
            <div className="c aq aje">
              <div className="fq ju ajs">
                <h6 className="an ayt ahe">High Praise</h6>
                <h3 className="ahs">“Go Analytics is amazing. Decisions that used to take weeks, now only takes minutes and is available to everyone on my team.”</h3>
                <p className="ahs an">Cindy Smith, founder of Cool Startup</p>
              </div>
            </div>
          </div>
        </div>

        <div className="k ae ajs">
          <div className="e baa">
            <img src={ Startup4 } />
            <img src={ Startup5 } />
            <img src={ Startup6 } />
            <img src={ Startup7 } />
            <img src={ Startup8 } />
          </div>
        </div>

        <div className="k block-secondary af">
          <div className="e baa">

            <div className="c ahz">
              <div className="btm btn ft kc gr nd">
                <h6 className="an ayt ahe">Inside the machine</h6>
                <h3 className="ahs">It’s not hard to see how we make your life easier every day.</h3>
              </div>
            </div>

            <div className="c ag">
              <div className="gc ajk ahz">
                <img className="agx" src={ Startup9 } />
                <p><strong>24/7 support.</strong> We’re always here for you no matter what time of day.</p>
              </div>
              <div className="gc ajk ahz">
                <img className="agx" src={ Startup10 } />
                <p><strong>E-commerce.</strong> We automatically handle all sales analytics.</p>
              </div>
              <div className="gc ajk ahz">
                <img className="agx" src={ Startup11 } />
                <p><strong>Turnaround.</strong> Our data analysis is distributed, so it processes in seconds.</p>
              </div>
            </div>

            <div className="c ag">
              <div className="gc ajk ahz">
                <img className="agx" src={ Startup12 } />
                <p><strong>Rich calculations.</strong> Limitless ways to splice and dice your data.</p>
              </div>
              <div className="gc ajk ahz">
                <img className="agx" src={ Startup13 } />
                <p><strong>Mobile apps.</strong> iOS and Android apps available for monitoring.</p>
              </div>
              <div className="gc ajk ahz">
                <img className="agx" src={ Startup14 } />
                <p><strong>Secure connections.</strong> Every single request is routed through HTTPS.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="k aj">
          <div className="e ayf">

            <div className="c ahz">
              <div className="gg lp gr nd">
                <h6 className="an ayt ahe">Business Talk</h6>
                <h3>No plans. We just bump your plan whenever you need it.</h3>
              </div>
            </div>

            <div className="c">
              <div className="gc ajk aiu ahz">
                <div className="aiw ahe">
                  <h6 className="an ayt ahs">Personal</h6>
                  <img className="ahs" src={ Startup15 } />
                  <p className="aiu">Plenty of processing power for any personal projects, big or small.</p>
                </div>

                <ul className="ek azw azy ahv">
                  <li className="ajl"><strong>10k</strong> monthly requests</li>
                  <li className="ajl"><strong>9am-5pm</strong> technical supprt</li>
                  <li className="ajl"><strong>Public</strong> API access</li>
                </ul>

                <button className="dm ap qq btn-block">
                  Start <span className="azo">a personal account</span>
                </button>
              </div>

              <div className="gc ajk aiu ahz">
                <div className="aiw">
                  <h6 className="an ayt ahs">Business</h6>
                  <img className="ahs" src={ Startup16 } />
                  <p className="aiu">The perfect sized plan for small businesses to get started.</p>
                </div>

                <ul className="ek azw azy ahv">
                  <li className="ajl"><strong>100k</strong> monthly requests</li>
                  <li className="ajl"><strong>24/7</strong> technical supprt</li>
                  <li className="ajl"><strong>Public</strong> API access</li>
                </ul>

                <button className="dm ap qq btn-block">
                  Start <span className="azo">a business account</span>
                </button>
              </div>

              <div className="gc ajk ain ahz">
                <div className="aiw">
                  <h6 className="an ayt ahs">Corporate</h6>
                  <img className="ahs" src={ Startup17 } />
                  <p className="aiu">An unlimited plan that will scale infinitely to any size project.</p>
                </div>

                <ul className="ek azw azy ahv">
                  <li className="ajl"><strong>Unlimited</strong> monthly requests</li>
                  <li className="ajl"><strong>24/7</strong> technical supprt</li>
                  <li className="ajl"><strong>Public &amp; Private</strong> API access</li>
                </ul>

                <button className="dm ap qq btn-block">
                  Start <span className="azo">a corporate account</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="k am ak">
          <div className="e">
            <div className="c">
              <div className="gd ahz">
                <ul className="ek azv">
                  <li className="ahe">
                    <h6 className="ayt">About</h6>
                  </li>
                  <li className="an">
                    We’ve been working on Go Analytics for the better part of a decade and are super proud of what we’ve created. If you’d like to learn more, or are interested in a job, contact us anytime at <a href="mailto: themes@getbootstrap.com">themes@getbootstrap.com</a>.
                  </li>
                </ul>
              </div>
              <div className="ga lo ahz">
                <ul className="ek azv">
                  <li className="ahe">
                    <h6 className="ayt">Product</h6>
                  </li>
                  <li className="an">Features</li>
                  <li className="an">Examples</li>
                  <li className="an">Tour</li>
                  <li className="an">Gallery</li>
                </ul>
              </div>
              <div className="ga ahz">
                <ul className="ek azv">
                  <li className="ahe">
                    <h6 className="ayt">Apis</h6>
                  </li>
                  <li className="an">Rich data</li>
                  <li className="an">Simple data</li>
                  <li className="an">Real time</li>
                  <li className="an">Social</li>
                </ul>
              </div>
              <div className="ga ahz">
                <ul className="ek azv">
                  <li className="ahe">
                    <h6 className="ayt">Legal</h6>
                  </li>
                  <li className="an">Terms</li>
                  <li className="an">Legal</li>
                  <li className="an">Privacy</li>
                  <li className="an">License</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default connect((state)=>{return {state}}) (Website)
