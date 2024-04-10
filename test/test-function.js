// const { fetchStats } = require("../src/practice-card.js");
// const { renderError, reNumSVG} = require("../src/common.js");

module.exports = async (req, res) => {
    /*
	const { 
        id, 
        disable_cache
    } = req.query;

    res.setHeader("Content-Type", "image/svg+xml");
    if(!disable_cache){
        res.setHeader("Cache-Control", "public, max-age=43200"); // 43200s（12h） cache
    }

    const validId = /^[1-9]\d*$/;
    const clamp = (min, max, n) => Math.max(min, Math.min(max, n));

    if(!validId.test(id)) {
        return res.send(renderError(`"${id}"不是一个合法uid`, {darkMode: dark_mode}));
    }

    const stats = await fetchStats(id);*/
    return `
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="50" viewBox="0 0 80 50" fill="none">
	<rect x="0.5" y="0.5" rx="4.5" height="99%" stroke="#E4E2E2" width="99%" fill="#fffefe" stroke-opacity="1"/>
	<g transform="translate(10, 35)" font-family="Verdana, Microsoft Yahei" text-rendering="geometricPrecision">
        <text x="0" y="0" fill="#e74c3c" font-weight="bold" textLength="60" font-size="30">210</text>
	</g>
</svg>`;
    //return res.send(renNumSVG(stats));
};
