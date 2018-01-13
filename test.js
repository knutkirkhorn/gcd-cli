import test from 'ava';
import execa from 'execa';

test('cli does print out', async t => {
    const {stdout} = await execa('./cli.js', ['--version']);
    t.true(stdout.length > 0);
});