const probes = [
  {
    name: 'Formspree OPTIONS',
    url: 'https://formspree.io/f/mgolqdrv',
    method: 'OPTIONS',
    headers: {
      Origin: 'https://resume-crafts.com',
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'content-type',
    },
  },
  {
    name: 'Formspree POST',
    url: 'https://formspree.io/f/mgolqdrv',
    method: 'POST',
    headers: {
      Origin: 'https://resume-crafts.com',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: 'CORS Probe',
      email: 'probe@example.com',
      message: 'CORS diagnostics probe',
    }),
  },
  {
    name: 'TrickleDB OPTIONS',
    url: 'https://api.trickledb.com/jobs',
    method: 'OPTIONS',
    headers: {
      Origin: 'https://resume-crafts.com',
      'Access-Control-Request-Method': 'GET',
    },
  },
];

function pickHeaders(headers) {
  const names = [
    'access-control-allow-origin',
    'access-control-allow-methods',
    'access-control-allow-headers',
    'access-control-allow-credentials',
    'vary',
    'content-type',
  ];
  const out = {};
  for (const name of names) {
    const value = headers.get(name);
    if (value) out[name] = value;
  }
  return out;
}

for (const probe of probes) {
  try {
    const response = await fetch(probe.url, {
      method: probe.method,
      headers: probe.headers,
      body: probe.body,
    });
    const selectedHeaders = pickHeaders(response.headers);
    console.log(
      JSON.stringify(
        {
          probe: probe.name,
          url: probe.url,
          method: probe.method,
          status: response.status,
          ok: response.ok,
          headers: selectedHeaders,
        },
        null,
        2,
      ),
    );
  } catch (error) {
    console.log(
      JSON.stringify(
        {
          probe: probe.name,
          url: probe.url,
          method: probe.method,
          error: String(error),
        },
        null,
        2,
      ),
    );
  }
}
