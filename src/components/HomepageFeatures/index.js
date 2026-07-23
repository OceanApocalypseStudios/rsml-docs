import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Versatility + choice.',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        RSML does not expect everyone to do things the exact same way and thus
        offers the developers several APIs to reach the same end result,
        because not all developers have the same end goal. Some prefer performance,
        while others prefer convenience.
      </>
    ),
  },
  {
    title: 'Simplicity + power.',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        RSML's APIs are very powerful, without being overly complex: given the fact RSML
        is not a complex language, it doesn't need and shouldn't have complex APIs. Simplicity
        or power... why not both?
      </>
    ),
  },
  {
    title: 'Performance + convenience.',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        RSML is heavily tested and benchmarked, and we constantly optimize everything
        we can, without sacrificing convenience. However, we also have specific APIs
        that go the extra mile and trade some degree of convenience for more performance,
        in case the developer needs those extra gains.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
