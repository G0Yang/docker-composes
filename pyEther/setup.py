import io
from setuptools import find_packages, setup

install_requires = [
    'web3==5.24.0',
    'dotenv==0.19.0',
]

# Read in the README for the long description on PyPI
def long_description():
    with io.open('README.md', 'r', encoding='utf-8') as f:
        readme = f.read()
    return readme


setup(
    name='pyEther',
    version='0.1',
    description='이더 거지 탈출 프로젝트',
    long_description=long_description(),
    # url='',
    author='ender35841',
    author_email='ender35841@gmail.com',
    license='MIT',
    packages=find_packages(),
    install_requires=install_requires,
    classifiers=[
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
    ],
    zip_safe=False
)
